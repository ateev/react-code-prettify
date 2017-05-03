import styled from 'styled-components';

export const TomorrowNight = styled.div`
  .prettyprint {
    background: #1d1f21;
    font-family: Menlo, "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Consolas, monospace;
    border: 0 !important;
  }
  .pln {
    color: #c5c8c6;
  }
  ol.linenums {
    margin-top: 0;
    margin-bottom: 0;
    color: #969896;
  }
  li.L0,
  li.L1,
  li.L2,
  li.L3,
  li.L4,
  li.L5,
  li.L6,
  li.L7,
  li.L8,
  li.L9 {
    padding-left: 1em;
    background-color: #1d1f21;
    list-style-type: decimal;
  }
  @media screen {
    .str {
        color: #b5bd68;
    }
    .kwd {
        color: #b294bb;
    }
    .com {
        color: #969896;
    }
    .typ {
        color: #81a2be;
    }
    .lit {
        color: #de935f;
    }
    .pun {
        color: #c5c8c6;
    }
    .opn {
        color: #c5c8c6;
    }
    .clo {
        color: #c5c8c6;
    }
    .tag {
        color: #cc6666;
    }
    .atn {
        color: #de935f;
    }
    .atv {
        color: #8abeb7;
    }
    /* declaration */
    
    .dec {
        color: #de935f;
    }
    .var {
        color: #cc6666;
    }
    .fun {
        color: #81a2be;
    }
  }
`;
