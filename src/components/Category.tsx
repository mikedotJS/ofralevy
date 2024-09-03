import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";

interface Props {
  names: string[];
  files: Record<string, Record<string, () => Promise<string>>>;
}

interface SeriesProps {
  seriesName: string;
  seriesFiles: Record<string, () => Promise<string>>;
}

const isFile = (name: string) => /\.(pdf|xlsx|png)$/.test(name);

export const SeriesItem: React.FC<SeriesProps> = ({
  seriesName,
  seriesFiles,
}) => {
  const fileKey = Object.keys(seriesFiles).find((key) =>
    key.includes(seriesName)
  );
  if (fileKey && isFile(seriesName)) {
    const fileFunction = seriesFiles[fileKey];
    return (
      <List>
        <ListItem key={seriesName}>
          <Link
            href="#"
            isExternal
            onClick={async (e) => {
              e.preventDefault();
              const resolvedUrl = await fileFunction();
              window.open(resolvedUrl, "_blank");
            }}
          >
            {seriesName.split("/").pop()}
          </Link>
        </ListItem>
      </List>
    );
  }

  return (
    <AccordionItem key={seriesName}>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {seriesName}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <List spacing={2}>
          {Object.entries(seriesFiles).map(([key, fileFunction]) => (
            <ListItem key={key}>
              <Link
                href="#"
                isExternal
                onClick={async (e) => {
                  e.preventDefault();
                  const resolvedUrl = await fileFunction();
                  window.open(resolvedUrl, "_blank");
                }}
              >
                {key.split("/").pop()}
              </Link>
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
};

const Category: React.FC<Props> = ({ names, files }) => {
  return (
    <>
      {names.map((seriesName: string) => (
        <SeriesItem
          key={seriesName}
          seriesName={seriesName}
          seriesFiles={files[seriesName]}
        />
      ))}
    </>
  );
};

export default Category;
