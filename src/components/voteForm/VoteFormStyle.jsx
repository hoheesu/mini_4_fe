import styled from "styled-components";

export const Page = styled.div`
  background-color: #f7f7f7;
`;

export const Form = styled.form`
  width: 100%;
  margin: 10px auto;
  padding: 100px 40px;
  border-radius: 5px;
  border: none;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

export const OptionInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  outline: none;
  border: 1px solid #e2e0e0;
  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

export const TitleInput = styled.input`
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 25px;
`;

export const ContentInput = styled.input`
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #9e30f4;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  font-size: 20px;
`;

export const RemoveButton = styled.button`
  padding: 0 7px;
  border: none;
  border-radius: 5px;
  background-color: #ff224e;
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const DateInput = styled.input`
  border-radius: 3px;
  min-height: 25px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid #e2e0e0;
  &:focus-within {
    border: 1px solid #9e30f4;
  }
`;

export const CreateButton = styled.button`
  padding: 3px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #9e30f4;
  color: white;
`;

// export const CheckInput = styled.input`
//   appearance: none;
//   border: 1.5px solid gainsboro;
//   border-radius: 0.35rem;
//   width: 1.5rem;
//   height: 1.5rem;
//   margin: 0 10px 0 0;

//   &:checked {
//     border-color: transparent;
//     background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
//     background-size: 100% 100%;
//     background-position: 50%;
//     background-repeat: no-repeat;
//     background-color: #ff224e;
//   }
// `;

export const OptionItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const CreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
