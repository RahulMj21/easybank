import { ReactNode } from "react";
import CustomContainer from "@/components/common/CustomContainer";
import Header from "@/components/layout/Header";

interface Props {
    children: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
    return (
        <CustomContainer>
            <Header />
            {children}
        </CustomContainer>
    );
};

export default BaseLayout;
