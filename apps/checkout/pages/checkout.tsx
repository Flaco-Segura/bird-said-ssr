import dynamic from "next/dynamic";

const Checkout = dynamic(() => import("checkout/Module"),{
  ssr: true,
});

export default function catalog() {
  return <Checkout />;
}
