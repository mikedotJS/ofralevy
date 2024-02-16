import { Box, AspectRatio } from "@chakra-ui/react";

interface GoogleSheetCardProps {
  sheetUrl: string;
  title?: string;
}

export const GoogleSheetCard: React.FC<GoogleSheetCardProps> = ({
  sheetUrl,
  title,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
    >
      <AspectRatio ratio={16 / 9}>
        <>
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg="blackAlpha.600"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => {
              window.open(sheetUrl, "_blank");
            }}
            cursor="pointer"
          >
            <Box color="white" p="4" textAlign="center">
              {title ?? "Click to view"}
            </Box>
          </Box>
        </>
      </AspectRatio>
    </Box>
  );
};
