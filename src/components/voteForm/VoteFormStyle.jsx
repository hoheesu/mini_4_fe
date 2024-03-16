import styled from "styled-components";

export const Form = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid #aaaaaa;
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
  border: none;
  width: 100%;
  background-color: #e6e6e6;
`;

export const TitleInput = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  font-size: 30px;
`;

export const ContentInput = styled.input`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e6e6e6;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
  font-size: 20px;
`;

export const RemoveButton = styled.button`
  padding: 5px 10px;
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
  margin: 0px 5px;
  border-radius: 5px;
  min-height: 30px;
  border: none;
  font-weight: bold;
  background-color: #e6e6e6;
`;

export const CreateButton = styled.button`
  padding: 3px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e6e6e6;
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
  margin-bottom: 10px;
  font-weight: 500;
`;

export const CreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 10px;
`;