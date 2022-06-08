import type { NextPage } from "next";
import Add from "@/basics/tsStart/";
import UnionAdd from "@/basics/unionTypes";
import LiteralAdd from "@/basics/literalTypes";
import FuncTypes from "@/basics/functionTypes";
import NeverType from "@/basics/neverType";
import FirstClass from "@/classes-interfaces/first-class";
import GetterSetter from "@/classes-interfaces/gettersSetters";
import Statics from "@/classes-interfaces/staticMethods-props";

// note that the NeverType comp throws an Error to showcase the "never" Type
const Home: NextPage = () => {
	return (
		<>
			<Add />
			<UnionAdd />
			<LiteralAdd />
			<FuncTypes />
			{/* <NeverType /> */}
			<FirstClass />
			<GetterSetter />
			<Statics />
		</>
	);
};

export default Home;
