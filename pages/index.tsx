import type { NextPage } from "next";
import Add from "@/4-basics/tsStart";
import UnionAdd from "@/4-basics/unionTypes";
import LiteralAdd from "@/4-basics/literalTypes";
import FuncTypes from "@/4-basics/functionTypes";
import NeverType from "@/4-basics/neverType";
import FirstClass from "@/5-classes/first-class";
import GetterSetter from "@/5-classes/gettersSetters";
import Statics from "@/5-classes/staticMethods-props";
import Singletons from "@/5-classes/singletons";
import FirstInterface from "@/5-interfaces/firstInterface";
import InterfaceInClass from "@/5-interfaces/interfacesInClasses";
import FunctionTypes from "@/5-interfaces/functionTypes";
import Optionals from "@/5-interfaces/optionalParamsProps";
import Intersection from "@/6-advancedTypes/intersection";
import TypeGuards from "@/6-advancedTypes/typeGuards";
import DiscriminatedUnions from "@/6-advancedTypes/discriminatedUnions";
import Typecasting from "@/6-advancedTypes/typeCasting";
import FuncOverload from "@/6-advancedTypes/funcOverloads";
import Generics from "@/7-generics/startWithGenerics";
import Constraints from "@/7-generics/constraints";

// note that the NeverType component throws an Error to showcase the "never" Type
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
			<Singletons />
			<FirstInterface />
			<InterfaceInClass />
			<FunctionTypes />
			<Optionals />
			<Intersection />
			<TypeGuards />
			<DiscriminatedUnions />
			<Typecasting />
			<FuncOverload />
			<Generics />
			<Constraints />
		</>
	);
};

export default Home;
