import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { MotionAnimate } from 'react-motion-animate'
import { Outlet, BrowserRouter, Route, Routes, useLocation, useHistory, Link } from "react-router-dom";
/*
import PBM1 from "../Assets/PBM Code Transfer.png"
import PBM2 from "../Assets/PBM Code Mint.png"
import PBM3 from "../Assets/PBM Code WL.png"
import Code1 from "../Assets/PBM Case study.txt"
import Code2 from "../Assets/PBM Vault example.txt"
*/

var [ PBM1, PBM2, PBM3, Code1, Code2 ] =
    [
        "https://ipfs.io/ipfs/QmdWhq213VCx3GFH3BonaXov1wftqLZVrSQdMLGUqS1UHY?filename=PBM%20Code%20Transfer.png",
        "https://ipfs.io/ipfs/QmS83E42k1TGaorvELwGNxbBrB3TJDGVnX7LfBWxt5U63E?filename=PBM%20Code%20Mint.png",
        "https://ipfs.io/ipfs/Qmf3RSFaWKyjtv5UAPGq6RTuLxRFCawTy7uRodPqFNdxYT?filename=PBM%20Code%20WL.png",
        "https://ipfs.io/ipfs/QmUQAsT1uR1ShcNY3NFrMZeYuKdrDw8UjmApGNmJ6XT6Vw?filename=PBM%20Case%20study.txt",
        "https://ipfs.io/ipfs/QmcKFfeL8JbERn2Y3mqo8vdjebecKvwfsaGXjfspVPTS3e?filename=PBM%20Vault%20example.txt"
    ]

const PBM = () => {
    return (
        <>
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <div class="pb-5">
                            <Link to="/Project">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </div>
                        <header class="mb-4 lg:mb-6 not-format">
                            <h1 class="mb-4 text-3xl font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">What is Purpose Bound Money?</h1>
                        </header>
                        <p class="pb-2 font-poppins text-l text-gray-500 font-extrabold">
                            Project Orchid
                        </p>
                        <p class="pb-5 font-poppins text-sm text-gray-400 font-bold">
                            Monetary Authority of Singapore - <a className="text-blue-500 font-poppins" href="https://www.mas.gov.sg/-/media/MAS-Media-Library/development/fintech/Project-Orchid/MAS-Project-Orchid-Report.pdf?la=en&hash=52037A6E155CB87160CCDA988CAB8C0CB9A8EB3C "> Source </a>
                        </p>
                        <a class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
                            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Blockchain
                            </span>
                        </a>
                        <blockquote class="font-poppins text-xl pt-5 pb-5 text-gray-600 italic p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                            " PBM refers to a protocol that specifies the conditions upon which an underlying digital currency can be used. PBMs are bearer instruments, with self-contained programming logic and transferrable between two parties without intermediaries." 
                        </blockquote>
                        <p class="font-poppins"> MAS definition for a purpose bound money/currency entails that the currency can be transacted without the need of intermediaries such as banks or any financial bodies as the transaction conditions has already been
                        programmed into the currency itself.
                        </p>

                        <blockquote class="font-poppins text-xl pt-5 pb-5 text-gray-600 italic p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                        " PBM serves as digital bearer instrument, and could in effect support government payouts, Conceptually, the holder of
                        the PBM could present the PBM and cash out without requiring its holder having to have a bank account."
                        </blockquote>
                        <p class="pt-5 font-poppins">
                            At its core, PBM is a digital medium of exchange that possesses embedded programmable logic. This unique characteristic allows PBM to transcend traditional boundaries and operate seamlessly across various platforms,
                            making it an ideal candidate for diverse applications even beyond local merchants and consumers.
                        </p>
                        <p class="pt-5 font-poppins">
                            To better understand the technical features of such digital currency, we can first look at the token standard being implemented, according to the <a className="text-blue-500 font-poppins" href="https://www.mas.gov.sg/-/media/mas-media-library/development/fintech/pbm/pbm-technical-whitepaper.pdf "> whitepaper. </a>
                        </p>

                        <h1 class="mb-4 text-xl font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-xl dark:text-white pt-10">What is ERC-1155?</h1>
                        <p class="pt-2 font-poppins">
                            ERC-1155 is a token standard on the Ethereum blockchain that allows for the creation and management of multiple types of tokens within a single smart contract. It offers greater flexibility, efficiency, and cost-effectiveness compared to earlier token standards like ERC-20 and ERC-721.
                            ERC-1155 can create both <a className="text-blue-500 font-poppins" href="https://cointelegraph.com/learn/fungible-vs-nonfungible-tokens-what-is-the-difference#:~:text=Fungible%20tokens%20or%20assets%20are,matter%20where%20it%20is%20issued.">fungible and non-fungible tokens</a> and enable batch transfers of multiple tokens in a single transaction, reducing gas costs.
                        </p>
                        <p class="pt-5 font-poppins">
                            MAS proposed that the PBM should consist of two main components, a <a className="text-blue-500 font-poppins" href="https://www.coindesk.com/learn/what-are-wrapped-tokens/">wrapper</a> that defines the conditions and the intended use, and an underlying store of value that serves as collateral.
                            An ERC-1155 multi-token smart contract would allow the transfer of tokens once the smart contract has been approved; thus when the "purpose" has been fulfilled,
                            it would trigger a smart contract function to unwrap the underlying collateral and send it to the intended persons/merchant automatically.
                        </p>
                        <h1 class="mb-4 text-xl font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-xl dark:text-white pt-10">How is PBM used in real world context?</h1>
                        <p class="pt-5 font-poppins">
                            PBMs can be and not limited to the ERC-1155 standard, but choosing the right token standard is important when deciding on its use cases. As listed in the whitepaper, PBMs should be interoperable, of real-world value and secure across both offline and on-chain. Embracing such change should also come
                            to the benefit that it will improve settlement speed, reduce costs and also introduce new digitalization to the economy.
                        </p>
                        <p class="pt-5 font-poppins">
                            My experience as one of the 5,000 selected trial participant of PBM during its pilot at <a className="text-blue-500 font-poppins" href="https://www.grab.com/sg/press/others/straitsx-and-grab-pilot-use-of-purpose-bound-money-during-singapore-fintech-festival-2022/">Singapore Fintech Festival 2022</a>, gave me a glimpse into how PBMs can function in the real-world. Both the
                            merchants and the users at the event got to witness in real time, immediate transactional finality without the need for an intermediary; which in comparison would take 1 to two days of processing time even with the current digital banking infrastructure. But with the ease of use like any other digital banking/financial payment application methods we have currently.
                        </p>
                        <h1 class="mb-4 text-xl font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-xl dark:text-white pt-10">My take on PBMs</h1>
                        <p class="pt-5 font-poppins">
                            After reviewing the logic behind MAS's proposed programmable currency, I decided to try and replicate a more basic method of a purpose-bound money. This would help me in getting a clearer understanding of the concepts and the thought that goes behind the development of PBMs. Firstly, I outlined some key points of a PBM:
                            <li className="pt-2 space-y-1 font-poppins">The tokens has pre-set conditions or any other specifications based on the needs or functionality, such as, which merchant it can transact with or within which period of date or time.
                            </li>
                            <li className="pt-2 space-y-1 font-poppins">Each token has an underlying collateral value that is redeemed by the merchant after the transaction has been approved
                            </li>
                            <li className="pt-2 space-y-1 font-poppins">If conditions are not met during transaction, token collateral value will not be redeemed
                            </li>
                            <li className="pt-2 space-y-1 font-poppins">When a token expire, it would be deemed unusable and will be burnt as a result
                            </li> 
                        </p>
                        <p class="pt-5 font-poppins">
                            In my example, instead of wrapping the collateral, I would simply utilise the vault token system I had developed in my previous project. This way, the vault token can then be redeemed or reused for future PBM creations in their own systems and be redeemed at a later date or even immediately if they wish to do so.
                        </p>
                        <h1 class="text-l font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white pt-10">Why vaults?</h1>
                        <p class="font-poppins">
                            Vault tokens enables liquidity provisions while also allowing other financial activities without the need to move the assets in and out of the system constantly. This will allow a more efficient and
                            flexible management of assets and may not limit the redemption of assets to only one type of asset but allow to multiple different currencies or assets.
                        </p>

                        <h1 class="mb-4 text-l font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white pt-10">Mint PBM function</h1>
                        <blockquote class="font-poppins pt-5 pb-5 text-gray-600 p-4 my-4 border-l-4 border-purple-300 bg-gray-50 dark:border-gray-500 shadow">
                            <img src={PBM2} alt="" />
                        </blockquote>
                        <p class="pt-5 font-poppins">
                            When minting the token, we can specify the different conditions that we want the tokens to inherit. We would also need to specify how much each token is worth in terms of the collateral value we set. In my example, I would set each token
                            to have a pre-determined vault token amount as its collateral. This vault token can then be redeemed to its equivalent nominal value in the vault by the merchant after a user has transacted with them. 
                        </p>
                        <h1 class="mb-4 text-l font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white pt-10">Whitelist and Conditions</h1>
                        <blockquote class="font-poppins pt-5 pb-5 text-gray-600 p-4 my-4 border-l-4 border-purple-300 bg-gray-50 dark:border-gray-500 shadow">
                            <img src={PBM3} alt="" />
                        </blockquote>
                        <p class="pt-5 font-poppins">
                            Participating vendors/merchants's addresses can be added to the whitelist via the whitelist function. This condition can also be set and altered even after the minting process. Other conditions can also be altered after the minting process
                            as long as the person(s) is the owner of the contract or has the neccessary privileges.
                        </p>
                        <h1 class="mb-4 text-l font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white pt-10">Transfer function</h1>
                        <blockquote class="font-poppins pt-5 pb-5 text-gray-600 p-4 my-4 border-l-4 border-purple-300 bg-gray-50 dark:border-gray-500 shadow">
                            <img src={PBM1} alt="" />
                        </blockquote>
                        <p class="pt-5 font-poppins">
                            When transacting, PBM holders should only be limited to the conditions set by the creator (merchant). This would include some examples such as the different eligible merchants the user can transact with, the time or date they can redeem and so on.
                            Once the transaction is received, the collateral can then be released to the intended recipient and the original PBM would be burned as a result.
                        </p>

                        <h1 class="mb-4 text-l font-poppins font-extrabold leading-tight text-gray-900 lg:mb-6 dark:text-white pt-10">In Summary..</h1>
                        <p class="pt-5 font-poppins">
                            By utilizing a vault system, we have essentially introduced a more decentralized approach to the same "purpose-bound" concept. Instead of wrapping a token or an asset equivalent that is set by an centralized body, we are able to perform the same functionalities
                            by binding the right collateral value in a pre-defined vault system that can hold multiple different assets but still maintain its peg stability without relying on external custodians.
                        </p>
                        <p class="pt-5 font-poppins">
                            So what does this mean to an average consumer? Essentially it all boils down to trust and usability, an average consumer would more likely prefer the same or even a better way of transacting like they do with the current mobile banking applications that they have been
                            accustomed to for years. But by improving the underlying infrastructure and introducing new technology to the landscape, we can slowly allow the society to accept and even come up with better solutions and innovations that will overall improve the way we transact everyday.
                        </p>
                        <p class="pt-5 pb-10 font-poppins text-gray-600">
                            Disclaimer: In this project, I explored a different approach to the purpose-bound money concept. My 1 day solo project is purely just an experiment and more of a hands-on lesson for me as a student learning more about the fintech industry. Therefore, the code that I had created is simplified
                            for the sake of understanding and experimentation and would not function in real life.
                        </p>
                        <p class="pt-2 pb-2 font-poppins text-gray-600 font-bold">
                            Code Links:
                        </p>
                        <a action="file.doc" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
                            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <form method="get" action={Code1}>
                                    <button type="submit">PBM Concept Code</button>
                                </form>
                            </span>
                        </a>
                        <a action="file.doc" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-500 to-green-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800">
                            <span class="font-poppins relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <form method="get" action={Code2}>
                                    <button type="submit">Vault Token Code</button>
                                </form>
                            </span>
                        </a>
                    </article>
                </div>
            </main>

        </>
    );
};

export default PBM;