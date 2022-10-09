import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props extends BoxProps {
    children: ReactNode;
}

const CustomSection = ({ children, ...props }: Props) => {
    return (
        <Box component="section" height="100vh" {...props}>
            {children}
        </Box>
    );
};

export default CustomSection;
