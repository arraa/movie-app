import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sideBar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box
            sx={{
                background: "#10131F",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    lg: "row",
                },
                color: "white",
                padding: 3,
                gap: 3,
                overflow: "hidden",
                height: "100vh",
            }}
        >
           <Sidebar/>
           <Box sx={{width:"100%", overflow:"scroll"}}>{children}</Box>
        </Box>
    );
};

export default Layout;
