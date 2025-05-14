import {
    Skeleton,

    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  
  const MovvaTableSkeleton = () => {
    const bg = useColorModeValue("#ffffff", "gray.800");
  
    return (
      <TableContainer
        borderRadius="12px 12px 0px 0px"
        border="1px solid #E4E7EC"
        mt="20px"
      >
        <Table variant="simple">
          <Thead bg="#E5E7EB">
            <Tr>
              <Th>Name</Th>
              <Th>Phone Number</Th>
              <Th>Verification</Th>
              <Th>Onboarding status</Th>
              <Th>Delivery count</Th>
              <Th>Joined date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody bg={bg}>
            {Array.from({ length: 8 }).map((_, i) => (
              <Tr key={i}>
                {Array.from({ length: 7 }).map((_, j) => (
                  <Td key={j}>
                    <Skeleton height="20px" />
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };
  
  export default MovvaTableSkeleton;
  