import { Container, LightMode, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./components/Header";

const Main = () => {
  const [todos, setTodos] = useState(() => {
    const registTodo = localStorage.getItem("todos");
    return registTodo ? JSON.parse(registTodo) : [];
  });

  // 파싱: 분석,해석

  const { colorMode } = useColorMode();

  console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // 업데이트될 때마다 안에 식 실행

  // stringify: js값이나 객체를 JSON문자열로 변환

  return (
    <Container
      maxW={450}
      w={"100%"}
      h="100vh"
      bgColor={colorMode === "light" ? "#f1f1f1" : "gray.800"}
      boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
      margin={"0 auto"}
    >
      <Header />
    </Container>
  );
};

export default Main;
