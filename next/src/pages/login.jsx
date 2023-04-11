import { Typography, Box } from "@mui/material";
import ButtonConnect from "@/components/ButtonConnect";
import LoginLayout from "@/layouts/LoginRegisterLayout";
import SelectUserType from "@/components/SelectUserType";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          bgcolor: "#3b3247",
          height: "5rem",
          borderRadius: "15px",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "5rem",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", fontSize: 30 }}
        >
          Login
        </Typography>
      </Box>
      <LoginLayout>
        <SelectUserType
          showMessage={true}
          title={"Connect"}
          ifRegister={false}
        />
      </LoginLayout>

      <ButtonConnect
        title="Next"
        handleClick={() => {
          router.push("/create-campaign");
        }}
      />
      <ButtonConnect
        title="Register"
        handleClick={() => {
          router.push("/register");
        }}
      />
    </Box>
  );
}
