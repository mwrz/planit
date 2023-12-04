import { Link } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTickTickToken } from "../context/TickTickTokenContext";
import { useQuery } from "../hooks/useQuery";
import { useTickTickApi } from "../hooks/useTickTickApi";
import { TickTickAuthData } from "../TickTick.types";


export const TickTickAuth = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { tickTickToken, updateTickTickToken } = useTickTickToken();
  const { tickTickRequest } = useTickTickApi();

  const client_id = process.env.REACT_APP_TICKTICK_CLIENT_ID;
  const authToken = process.env.REACT_APP_TICKTICK_AUTH_TOKEN;
  const redirect_uri = process.env.REACT_APP_LOCALHOST;
  const scope = "tasks:read";
  const tickTickLink = `https://ticktick.com/oauth/authorize?scope=${scope}&client_id=${client_id}&state=state&redirect_uri=${redirect_uri}&response_type=code`;

  const successfullRequest = useCallback((authData: TickTickAuthData) => {
    updateTickTickToken(authData.access_token);
    navigate("/");
  }, [navigate, updateTickTickToken]);

  useEffect(() => {
    const queryCode = query.get("code");

    if (queryCode && (!!!tickTickToken)) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: `code=${queryCode}&grant_type=authorization_code&scope=${scope}&redirect_uri=${redirect_uri}`,
      };
      tickTickRequest("https://ticktick.com/oauth/token", requestOptions, successfullRequest);
    }
  }, [authToken, navigate, query, redirect_uri, successfullRequest, tickTickRequest, tickTickToken, updateTickTickToken]);

  return <Link href={tickTickLink}>Log in to TickTick</Link>;
};
