"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useActionState } from "react";
import { authenticate } from "@/src/lib/auth.action";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const t = useTranslations();

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    // <Card variant="outlined">
    //   {/* <form  className="space-y-3"> */}
    //     {/* <SitemarkIcon /> */}
    //     <Typography
    //       component="h1"
    //       variant="h4"
    //       sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
    //     >
    //       Sign in
    //     </Typography>
    //     <Box
    //       component="form"
    //       action={formAction}
    //       noValidate
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         width: "100%",
    //         gap: 2,
    //       }}
    //     >
    //       <FormControl>
    //         <FormLabel htmlFor="email">Email</FormLabel>
    //         <TextField
    //           error={emailError}
    //           helperText={emailErrorMessage}
    //           id="email"
    //           type="email"
    //           name="email"
    //           placeholder="your@email.com"
    //           autoComplete="email"
    //           autoFocus
    //           required
    //           fullWidth
    //           variant="outlined"
    //           color={emailError ? "error" : "primary"}
    //         />
    //       </FormControl>
    //       <FormControl>
    //         <FormLabel htmlFor="password">Password</FormLabel>
    //         <TextField
    //           error={passwordError}
    //           helperText={passwordErrorMessage}
    //           name="password"
    //           placeholder="••••••"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //           autoFocus
    //           required
    //           fullWidth
    //           variant="outlined"
    //           color={passwordError ? "error" : "primary"}
    //         />
    //       </FormControl>
    //       <FormControlLabel
    //         control={<Checkbox value="remember" color="primary" />}
    //         label="Remember me"
    //       />

    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         onClick={validateInputs}
    //       >
    //         Sign in
    //       </Button>
    //       <Link
    //         component="button"
    //         type="button"
    //         onClick={handleClickOpen}
    //         variant="body2"
    //         sx={{ alignSelf: "center" }}
    //       >
    //         Forgot your password?
    //       </Link>
    //     </Box>
    //     <Divider>or</Divider>
    //     <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

    //       <Typography sx={{ textAlign: "center" }}>
    //         Don&apos;t have an account?{" "}
    //         <Link
    //           href="/material-ui/getting-started/templates/sign-in/"
    //           variant="body2"
    //           sx={{ alignSelf: "center" }}
    //         >
    //           Sign up
    //         </Link>
    //       </Typography>
    //     </Box>
    //   {/* </form> */}
    // </Card>
    <form action={formAction} className="space-y-5">
      <h1 className={` mb-1 text-xl`}>{t("loginTitle")}</h1>
      {JSON.stringify(errorMessage?.message)}

      <FormControl fullWidth>
        <FormLabel htmlFor="phone">Phone</FormLabel>
        <TextField
          // error={emailError}
          // helperText={emailErrorMessage}
          size="small"
          type="phone"
          name="phone"
          autoComplete="phone"
          autoFocus
          required
          fullWidth
          variant="outlined"
          // color={emailError ? "error" : "primary"}
        />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          // error={passwordError}
          // helperText={passwordErrorMessage}
          size="small"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          fullWidth
          variant="outlined"
          // color={passwordError ? "error" : "primary"}
        />
      </FormControl>

      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <Button
        className="mt-4 "
        aria-disabled={isPending}
        variant="contained"
        disableElevation
        fullWidth
        type="submit"
      >
        Log in
      </Button>
    </form>
  );
}
