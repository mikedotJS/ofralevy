export const openFileInNewTab = async (filePath: string) => {
    try {
      const file = await import.meta.glob(filePath, {
        query: "?url",
        import: "default",
      })[filePath]();
      
      if (typeof file !== 'string') {
        throw new Error('File path must be a string');
      }

      window.open(file, "_blank");
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };