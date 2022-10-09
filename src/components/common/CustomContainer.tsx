import { Container, ContainerProps } from "@mui/material";
import { ReactNode } from "react";

interface Props extends ContainerProps {
    children: ReactNode;
}

const CustomContainer = ({ children, ...props }: Props) => {
    return (
        <Container maxWidth="xl" {...props}>
            {children}
        </Container>
    );
};

export default CustomContainer;
