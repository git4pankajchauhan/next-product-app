import styled from 'styled-components';

export const Drawer = styled.div`
  position: absolute;
  background: rgba(40, 44, 63, 0.7);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: fadeIn ease 0.5s;
  .c-drawer-container {
    padding: 3rem;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 350px;
    z-index: 1001;
    animation: slideRight ease-out 0.3s;
    .c-drawer-head {
      text-transform: uppercase;
      font-size: 1.5rem;
      margin-bottom: 3rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        font-size: 2.5rem;
        cursor: pointer;
      }
    }
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      right: -200%;
    }
    to {
      opacity: 1;
      right: 0%;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
