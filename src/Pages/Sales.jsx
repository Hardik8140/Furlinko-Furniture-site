import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { plush } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { deleteSales, getSales, postSales } from "../Redux/Product/action";

const initialState = {
  id: 0,
  name: "",
  noOfProducts: 0,
  price: 0,
  totalPrice: 0,
};

const Sales = () => {
  const [data, setData] = useState(initialState);
  const sales = useSelector((store) => store.productReducer.sales);
  const dispatch = useDispatch();

  const {
    isOpen: addModalOpen,
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
  } = useDisclosure();

  const handelChange = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postSales(data));
    setData(initialState);
  };

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSales(id));
  };
  // const {
  //   isOpen: editModalOpen,
  //   onOpen: onEditModalOpen,
  //   onClose: onEditModalClose,
  // } = useDisclosure();
  return (
    <>
      <Center>
        <Box
          gap={8}
          w="70%"
          // border="1px solid red"
          display="flex"
          justifyContent="space-evenly"
          alignItems="baseline"
          m={8}
          p={8}
          borderRadius={8}
          boxShadow={"md"}
        >
          <Box>
            <Button onClick={onAddModalOpen} boxShadow={"md"}>
              <img src={plush} alt="" width={30} /> <Text>Add New Sales</Text>
            </Button>

            <Modal isOpen={addModalOpen} onClose={onAddModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Sales</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={handleSubmit}>
                    <Heading as="h5" size="sm" pb={4}>
                      Id:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="Product Id"
                      mb={4}
                      name="id"
                      value={data.id}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Name:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Name"
                      mb={4}
                      name="name"
                      value={data.name}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      No of Product:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="No of Product"
                      mb={4}
                      name="noOfProducts"
                      value={data.noOfProducts}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Price:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="Product Price"
                      mb={4}
                      name="price"
                      value={data.price}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Total Price:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="Total Price"
                      mb={4}
                      name="totalPrice"
                      value={data.totalPrice}
                      onChange={handelChange}
                    />
                    <Center>
                      <Button variant="solid" type="submit">
                        Add Sales
                      </Button>
                    </Center>
                  </form>
                </ModalBody>

                {/* <ModalFooter> */}
                {/* </ModalFooter> */}
              </ModalContent>
            </Modal>
          </Box>

          <Box display="flex" gap={8}>
            <Select w="16rem" boxShadow={"md"}>
              <option value="">Select Category</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </Select>
            <Select w="16rem" boxShadow={"md"}>
              <option value="">Sort by Name</option>
            </Select>
          </Box>

          {/* <Box>
            <Button onClick={onEditModalOpen} boxShadow={"md"}>
              <img src={plush} alt="" width={30} /> <Text>Edit Sales</Text>
            </Button>
            <Modal isOpen={editModalOpen} onClose={onEditModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Sales</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Heading as="h5" size="sm" pb={4}>
                    Id:
                  </Heading>
                  <Input type="number" placeholder="Product Id" mb={4} />
                  <Heading as="h5" size="sm" pb={4}>
                    Product Name:
                  </Heading>
                  <Input type="text" placeholder="Product Name" mb={4} />
                  <Heading as="h5" size="sm" pb={4}>
                    Product Price:
                  </Heading>
                  <Input type="text" placeholder="Product Price" mb={4} />
                  <Heading as="h5" size="sm" pb={4}>
                    Total Price:
                  </Heading>
                  <Input type="text" placeholder="Total Price" mb={4} />
                </ModalBody>

                <ModalFooter>
                  <Button variant="solid">Edit Sales</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>{" "}
          </Box> */}
        </Box>
      </Center>

      <Center>
        <TableContainer w="70%" borderRadius={8} boxShadow={"md"} m={8} p={8}>
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Sales Name</Th>
                <Th>No of Product</Th>
                <Th>Product Price</Th>
                <Th>Total Price</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sales.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.id}</Td>
                  <Td>{el.name}</Td>
                  <Td>{el.noOfProducts}</Td>
                  <Td>{el.price}</Td>
                  <Td>{el.totalPrice}</Td>
                  <Td>
                    <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};

export default Sales;
