declare module "@not-for-import/app2/AboutPage" {
    function App(): JSX.Element;
    export default App;
}
declare module "app2/routes" {
    import AboutPage from "@not-for-import/app2/AboutPage";
    const routes: {
        path: string;
        component: typeof AboutPage;
    }[];
    export default routes;
}
declare module "app2/App2Index" {
    function App(): JSX.Element;
    export default App;
}
