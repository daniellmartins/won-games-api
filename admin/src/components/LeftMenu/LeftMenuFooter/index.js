/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";
import { PropTypes } from "prop-types";

import Wrapper from "./Wrapper";

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a
          key="website"
          href="https://reactavancado.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Avançado
        </a>
        &nbsp;
        <a
          href={`https://github.com/strapi/strapi/releases/tag/v${version}`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          v{version}
        </a>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
