import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import './App.css';
import {Button, Card, Heading, Image, View, withAuthenticator} from "@aws-amplify/ui-react";

const App = ({signOut}) => (
    <View className={"App"}>
        <Card>
            <Image alt={"logo"} src={logo} className={"App-logo"}/>
            <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
    </View>
);

export default withAuthenticator(App);
