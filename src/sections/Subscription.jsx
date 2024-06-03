import Button from "../components/Button";

const Subscription = () => {
  return (
    <div
      id="contact-us"
      className="w-full padding-x pt-28 flex justify-between items-center max-lg:flex-col gap-10"
    >
      <p className="text-4xl lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral"> Updates</span> & News Letter
      </p>
      <div className="flex max-sm:justify-end items-center max-sm:w-full gap-10 sm:border w-full p-2 sm:border-neutral sm:rounded-full">
        <input type="text" placeholder="Email Address" className="input" />
        <div>
          <Button block>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
