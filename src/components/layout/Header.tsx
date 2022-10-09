import Logo from "@/components/icons/Logo";
import { LINKS } from "@/utils/constants";
import { Box, Link } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <Box
            component="header"
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "3rem",
                padding: "1.5rem 0",
            }}
        >
            <NextLink href="/" passHref>
                <Link display="inline-block">
                    <Logo w="130" />
                </Link>
            </NextLink>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3rem",
                    fontSize: "18px",
                }}
            >
                {LINKS.map((link) => (
                    <NextLink href={link.path} passHref key={link.text}>
                        <Link
                            color={
                                router.route === link.path
                                    ? "textColor.main"
                                    : "textColor.gray"
                            }
                            sx={{ textDecoration: "none" }}
                        >
                            {link.text}
                        </Link>
                    </NextLink>
                ))}
            </Box>
        </Box>
    );
};

export default Header;
