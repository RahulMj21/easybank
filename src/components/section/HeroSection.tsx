import React from "react";
import CustomSection from "@/components/common/CustomSection";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Discount from "@/components/icons/Discount";

const HeroSection = () => {
    const { palette } = useTheme();
    return (
        <CustomSection
            height="calc(100vh - 128px)"
            display="flex"
            alignItems="center"
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "18px",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.6rem",
                    background: `linear-gradient(170deg,${palette.secondary.main}, ${palette.secondary.dark})`,
                }}
            >
                <Discount />
                <Typography variant="body1" letterSpacing="0.5px">
                    <span>20% </span>
                    DISCOUNT FOR <span>1 MONTH </span>
                    ACCOUNT
                </Typography>
            </Box>
            <Box position="relative" height="100vh" width="100%">
                <Image src="/images/robot.png" alt="Robot-hand" layout="fill" />
            </Box>
        </CustomSection>
    );
};

export default HeroSection;
