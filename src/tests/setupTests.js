// The below is a simple set up for test when using enzyme and adapter. 
// Can see more of this in the enzyme documentation
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({path: '.env.test'});
Enzyme.configure({
  adapter: new Adapter()
});