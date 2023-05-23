import styled from "styled-components";

export const AppContainer = styled.div`
.mainContent {
  width: 80%;
  display: flex;
  flex-direction: column;
  .header {
    border-bottom: 1px solid black;
    height: 10%;
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 20px;
    .btn {
      background-color: #4CAF50;
      border: none;
      color: white;
      cursor: pointer;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      :hover {
        background-color: #469c49;
      }
    }
  }
  .footer {
    border-top: 1px solid black;
    height: 10%;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
  }
  .main {
    height: 80%;
    overflow: auto;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      font-size: 2rem;
      font-weight: bold;
      width: 400px;
      height: 200px;
    }
    .removeIcon {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
}
.instructionBlock {
  border-left: 1px solid black;
  width: 20%;
  .aside {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1rem;
    font-weight: bold;
    .instructionText {
      padding: 10px;
    }
  }
}
`