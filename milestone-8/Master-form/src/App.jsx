// import HookForm from "./Hook/HookForm";

import HookForm from "./Hook/HookForm";

const App = () => {
  // const handleUpdateProfile = (data) => {
  //   console.log("updated form", data);
  // };
  // const handleSingProfile = (data) => {
  //   console.log("singUp form", data);
  // };

  return (
    <div>
      {/* <HookForm></HookForm> */}
      {/* <ReUseableForm
        handleSubmit={handleSingProfile}
        formTitle={"Sing UP"}
        button={"sing Up"}
      >
        <div>
          <p>Sing UP</p>
        </div>
      </ReUseableForm>
      <ReUseableForm
        handleSubmit={handleUpdateProfile}
        formTitle={"Login "}
        button={"Update"}
      >
        <div>
          <p>Login</p>
        </div>
      </ReUseableForm>
     */}
      {/* <Grandpa></Grandpa> */}
      <HookForm></HookForm>
    </div>
  );
};

export default App;
