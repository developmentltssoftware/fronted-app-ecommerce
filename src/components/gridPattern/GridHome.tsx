import { Grid, GridItem } from "@chakra-ui/react";

export const GridHome: React.FC = ({children}) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={2} h="fit-content" />
      <GridItem colStart={4} colEnd={6} h="fit-content" />
    </Grid>
  );
};
