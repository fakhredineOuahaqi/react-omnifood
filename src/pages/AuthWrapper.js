import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Loading from "../components/Loading";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />;
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 150vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;