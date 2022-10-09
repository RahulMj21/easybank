import CustomSection from "@/components/common/CustomSection";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const CustomErrorPage = () => {
    const router = useRouter();

    return (
        <CustomSection
            sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "12rem",
                height: "calc(100vh - 128px)",
            }}
        >
            <Typography component="h1" fontSize="4rem">
                Oops.. Page Not Found
            </Typography>
        </CustomSection>
    );
};

export default CustomErrorPage;
