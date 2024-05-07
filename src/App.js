/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import logo from "./assets/craxxinno.png";
function App() {
    return (
        <div className="App">
            <div className="">
                <img className="logo" src={logo} />
            </div>

            <div className="hero-content">
                <h1>
                    Helping hands always come <br /> handy when it comes to <br /> building Dreams!
                </h1>
            </div>

            <div className="diagonal-div">
                <div className="content-row">
                    <div className="content">
                        <h1>integrated with</h1>
                        <h1>social media</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br /> Diam ut id nisl tellus rhoncus, imperdiet consequat ornare.{" "}
                        </p>
                    </div>
                    <button className="learmore-Btn">Learn More</button>
                </div>
                <div className="card-row">
                    <div className="cards">
                        <div className="card">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="10" fill="#006EEA" />
                                <path
                                    d="M34.7939 49.994V33.602H40.3239L41.1459 27.184H34.7939V23.096C34.7939 21.244 35.3099 19.976 37.9679 19.976H41.3359V14.254C39.6979 14.078 38.0499 13.994 36.4019 14C31.5139 14 28.1579 16.984 28.1579 22.462V27.172H22.6639V33.59H28.1699V49.994H34.7939Z"
                                    fill="white"
                                />
                            </svg>

                            <h2 className="title">Face Book</h2>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className="card">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="10" fill="#E95C49" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M42.9903 35.961C41.6583 40.245 38.3383 43.211 33.9203 43.865C27.1783 44.863 20.5583 39.751 20.0343 32.951C19.4903 25.895 25.0563 20.001 32.0023 20.001C33.6083 20.001 35.1403 20.317 36.5403 20.889C37.0263 21.087 37.5763 20.917 37.8243 20.457L40.6943 15.163C40.9663 14.657 40.7703 14.005 40.2463 13.769C37.7323 12.633 34.9443 12.001 32.0083 12.001C20.7643 12.001 11.6863 21.273 12.0083 32.587C12.3023 42.909 20.8223 51.545 31.1363 51.983C42.2283 52.451 51.4283 43.891 51.9863 33.045C52.0083 32.649 52.0003 30.343 51.9923 28.991C51.9903 28.439 51.5423 28.001 50.9923 28.001H32.9943C32.4423 28.001 31.9943 28.447 31.9943 29.001V34.961C31.9943 35.511 32.4423 35.961 32.9943 35.961H42.9903Z"
                                    fill="#03133D"
                                />
                                <mask id="mask0_705_742" maskUnits="userSpaceOnUse" x="12" y="12" width="41" height="41">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M42.9903 35.961C41.6583 40.245 38.3383 43.211 33.9203 43.865C27.1783 44.863 20.5583 39.751 20.0343 32.951C19.4903 25.895 25.0563 20.001 32.0023 20.001C33.6083 20.001 35.1403 20.317 36.5403 20.889C37.0263 21.087 37.5763 20.917 37.8243 20.457L40.6943 15.163C40.9663 14.657 40.7703 14.005 40.2463 13.769C37.7323 12.633 34.9443 12.001 32.0083 12.001C20.7643 12.001 11.6863 21.273 12.0083 32.587C12.3023 42.909 20.8223 51.545 31.1363 51.983C42.2283 52.451 51.4283 43.891 51.9863 33.045C52.0083 32.649 52.0003 30.343 51.9923 28.991C51.9903 28.439 51.5423 28.001 50.9923 28.001H32.9943C32.4423 28.001 31.9943 28.447 31.9943 29.001V34.961C31.9943 35.511 32.4423 35.961 32.9943 35.961H42.9903Z"
                                        fill="white"
                                    />
                                </mask>
                                <g mask="url(#mask0_705_742)">
                                    <rect x="8" y="8" width="48" height="48" fill="white" />
                                </g>
                            </svg>

                            <h2 className="title">Google</h2>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className="card">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="10" fill="#0298EB" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M24.1539 48.0005C38.6459 48.0005 47.0299 36.7486 47.0299 26.0706C47.0299 25.7766 49.0899 24.0086 49.9719 20.3226C50.1519 19.5746 49.4239 18.9846 48.7379 19.2986C46.9779 20.1066 45.1919 19.4666 44.4159 18.5466C41.4319 15.2926 36.4419 15.1366 33.2679 18.1966C31.2219 20.1706 30.3539 23.1106 30.9879 25.9166C24.2859 26.3946 19.6839 23.2186 15.8999 18.8646C15.4119 18.2986 14.5059 18.5966 14.4039 19.3446C13.8439 23.5086 13.6679 33.6325 23.6999 39.4466C21.9579 41.9506 18.5479 43.4286 14.7519 44.0626C13.9119 44.2046 13.7119 45.3686 14.4799 45.7446C17.4879 47.2246 20.7939 47.9986 24.1539 47.9946"
                                    fill="#03133D"
                                />
                                <mask id="mask0_705_655" maskUnits="userSpaceOnUse" x="14" y="16" width="36" height="33">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M24.1539 48.0005C38.6459 48.0005 47.0299 36.7486 47.0299 26.0706C47.0299 25.7766 49.0899 24.0086 49.9719 20.3226C50.1519 19.5746 49.4239 18.9846 48.7379 19.2986C46.9779 20.1066 45.1919 19.4666 44.4159 18.5466C41.4319 15.2926 36.4419 15.1366 33.2679 18.1966C31.2219 20.1706 30.3539 23.1106 30.9879 25.9166C24.2859 26.3946 19.6839 23.2186 15.8999 18.8646C15.4119 18.2986 14.5059 18.5966 14.4039 19.3446C13.8439 23.5086 13.6679 33.6325 23.6999 39.4466C21.9579 41.9506 18.5479 43.4286 14.7519 44.0626C13.9119 44.2046 13.7119 45.3686 14.4799 45.7446C17.4879 47.2246 20.7939 47.9986 24.1539 47.9946"
                                        fill="white"
                                    />
                                </mask>
                                <g mask="url(#mask0_705_655)">
                                    <rect x="8" y="8" width="48" height="48" fill="white" />
                                </g>
                            </svg>

                            <h2 className="title">Twitter</h2>
                            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3"></div>
        </div>
    );
}

export default App;
