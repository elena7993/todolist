import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Heading, Input, Text, useColorMode } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { register, handleSubmit, reset } = useForm();
  const isDark = colorMode === "light" ? "#f1f1f1" : "gray.800";

  const onClick = (data) => {
    console.log(data);
  };

  return (
    <Box bgColor={isDark}>
      <Heading as={"header"}>
        <Text as={"h2"}>텍스트</Text>
        <Box
          onClick={toggleColorMode}
          w={"50px"}
          h={"50px"}
          borderRadius={"30px 30px 30px 0"}
        >
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Box>

        <Box as="form" onSubmit={handleSubmit(onClick)}>
          <Input
            {...register("todo", {
              required: "내용이 없습니다. 입력하세요😋",
            })}
            placeholder="할 일을 적어주세요!"
            border={"1px solid #dbdbdb"}
          />
        </Box>
      </Heading>
    </Box>
  );
};

export default Header;
