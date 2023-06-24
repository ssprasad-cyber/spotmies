"use client";
import React from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Wrapper from "./reusableComponent/wrapper";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiSolidity,
  SiNextdotjs,
  SiDjango,
  SiPython,
  SiMysql,
  SiAmazonaws,
  SiIpfs,
  SiWeb3Dotjs,
  SiHyperledger,
  SiJavascript,
  SiStellar,
} from "react-icons/si";
import { Fade } from "react-reveal";
import './tech.css'
import { color } from "framer-motion";
import { MdBorderColor } from "react-icons/md"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHexagon } from '@fortawesome/free-solid-svg-icons';

import python from './assects/python.png';

export default function TechStack1() {
  // add truffle,Ganache
  const technologies = [
    {
      icon: <FaReact color="#61DBFB" />,
      name: "React",
    },
    {
      icon: <FaNodeJs color="#3C2073A" />,
      name: "Node JS",
    },
    {
      icon: <SiFlutter color="#02569B" />,
      name: "Flutter",
    },
    {
      icon: <SiMongodb color="#4DB33D" />,
      name: "MongoDB",
    },
    {
      icon: <SiSolidity color="#363636" />,
      name: "Solidity",
    },
    {
      icon: <SiNextdotjs color="#000000" />,
      name: "Next JS",
    },
    {
      icon: <SiDjango color="#092E20" />,
      name: "Django",
    },
    {
      icon: <SiPython color="#3776AB" />,
      name: "Python",
    },
    {
      icon: <SiMysql color="#4479A1" />,
      name: "MySQL",
    },
    {
      icon: <SiAmazonaws color="#232F3E" />,
      name: "AWS",
    },
    {
      icon: <SiIpfs color="#65C2CB" />,
      name: "IPFS",
    },
    {
      icon: <SiWeb3Dotjs color="#F162022" />,
      name: "Web3 JS",
    },
    {
      icon: <SiHyperledger color="#2F3134" />,
      name: "Hyperledger",
    },
    {
      icon: <SiJavascript color="#F7DF1E" />,
      name: "Javascript",
    },
    {
      icon: <SiStellar color="#020B5E5" />,
      name: "Stellar",
    },
  ];

  
   

  return (
    <Wrapper
      title={"Techstack we're working with"}
      className="bg-bg3 min-h-fit"
    >
      <div className="mt-5 px-0 md:px-5">
        <Fade bottom>
          <div>
            <div>
              
            </div>
            <div className="flex justify-center items-center p-6 lg:pl-20">
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaWyeWKrnACIhPflxZQ3Z1U_zYw2tvB0_zt1DBz1QWn54Gf5duOQr8BO5N9pVusDdJdrep3Y3sIHP3F3u2njUcndibT7rYJSzoxD5-lqfCmE-x0N8DsKnEc50AqMUPL_6jS-zF4bZxa6PGwuQBjterznZw5Na18iDNnDWXZFMshxW2doNMZ8othVpoUc80BP7r9P9bNM8x69SLCeUk_kgsR-QYb9OEkH0hIWNkUYCZuLLrQGDByyXQGdW4DLhYybi8kyO6lrmho_rxGZxVnlQKCH9QOxQdYqOBiZXCeGMp4zOudII3ho_Dq3nU1Cuk42DdMC70394mdlE5lcO1iIh-C-rZ6LKPcbwVddV-8iM4Vzzd3RDHdWgmSmw8seiWfn37I7zUwGWQ0iyX_LiZlEYqb64VdVJO2ZdH3JVakRYvgeNrcMVu6UwgqabPgSx9k0dquWyi1qD0vTqelKKk9ggpWUtFfBe_QJxi5vGtJOQ2NrjoTE6W92DCYOvAiyFqmRnrRouqbpPg38cLslvvlVqMTi9AooXPlNmA1ThUziWFI5XgjigqOnSODCptEWnspU4q62g4B-gbFG9dqWu1Gj6734l5RB9fKsBVVDIvoo8dp23KNL5t5UnQvPDASVWnikrEiceSg4FBs7v38BHMonx19YnjYkylqD-YtLFtpKoQAHwH3i6sGqxgVrirzD0ESBm03K0jB1U_QYui0r1XLchDHxmzy3V43VjktJpCHg6mSlxC2tFPDsEGbFy7vbRD7tSLlYpTTYPguilClXQFIZcQRRlmJRwDtDokEPC8v-AK1J-37YD0luBeLY7e5sXNYFpzxU1kfMs8BjlUtoqt-vhg8MHfRiNhAxMy5eOZ1NBBYMd4D6fd6oDfO5VA9hFKADQIZz4UEVs_56cVhn0aJeEw=w500-h500-s-no?authuser=0" width="47px" alt="" />
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaXAiiZEENgnP4jeOsf3uQIYNM7NMq1rmKniZSRofu7f-xujkzV49EGqk0Mu9LCxkOAYCI1ZTXjit0GZ-fvGTQF2C1w_a1mafFvcvtO-L4yZklve2pVl_z364K0Ow9lzFVzcXnV0cHZWycW_eHWs2amlRY65nRlHGvKZvovCC7lyNund3nCWCwEgO1Nwg_viyahzzpCnx7-y-XcOMmZbhR8wxUwwj89cikkUJPg5XLW-KJyN23CbUk3JSdHUG_lXmhkbXB7CKs0BOwpaD9at8apKrpbdN_HhKOODzxHYRnevU2mSHcr4aExATUaIVXOvAE6rvrhB_Bkk86KnoZXnHXqJ4fApbNjSNJNc430-Xqtj2qIWVXHkHtGzwkM9a7jiAz3J3aJgoZqRMKxW2kzt2uy4WWGA3sSCGUYjfs6-g_S8jcJVqQ8K790c1UIL16WOpp8w5fuv7NeQeF-OWH2VD_MD0ruOrTR98psNyKeb2UN3Vu7ROLO-SJIA8yRUgp4wPCS3k57_3lokM9jPDXavkyJvLTr1qOu6p8oCUCk_TDdxMIBQSDRwht1L7MIFAE06tRnhtkI-9hQAqL3WOiP41xZQJFbqCgLwE3oaWhkAd6v18nC0804fIClyyvrt0a1AZkD8SW4jRahH8k-CBRz3-aD4EgW_FKUPShWeZULKItpQv0YxUEoNE0W3QQ8L1twIYCwAEWTRg-KsRYgUk-x6ns4wUlrl5EQvF68yD4qe9d--d03-2KCvR5y7ErGHhqw17JjZ3duTR0BU8xBTS0itwD4bW6Gq55oToO3MdzBj_kOQB6AXpfZFeHMOxoIt9y6KHDIGaU1XwenNvkh9v-ZVKoeGstlBr519SCxYiwPOJVwrI8LiLgLI_Hm6K4QzZ5op3R831C4ETwWCNazSqa1DPw=w500-h500-s-no?authuser=0" width="47px" alt="" />
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaUpK96ge55uETmBXjHTfWSA3CLXKX4RrElN7my7bpR902JUFmyPih-RxUXyG4UTVEJaJdZpCAYF9saUAY6It4nyPSIlslOUpGi-LvEMHyHUU_SI5mNv_-B2TecAPoqTDLA9Ixaz9HdSq25p7PDYa8prHhFicfO1zHGEONsUlFM82f4lfIaRhecYB8uHWVvUolXAfz6BMqTvcmksHuKj4B3T8V_mMO3wNyD8oj6K5QeUVkzx6_L_FLPpb3G-XWsFQhTlSKLlAWPOQ4uag5sgmD_Bl2AKc8y0JKUopxA5wAVHC8ZSana1pWGH1Fve25SXUKoFoCs2kC11Tt83LmTYhJ_br7YmbrxFqx_d9lCOurbwAqwCheNYzZ0pSa5UNDjrAgIOjK0roykfwOM6-okAy6q4uh57N3Z-R664JUSw8bfbiMIBS2v3ofiECTgk9R2pJ1P0-tPCOTT--lmIAqEeC9oIyspQ2GuSPzC2_6i3wcaisOOHpRX6Y4zgG0YKIwTWOYaKGqvGJiF5m1EJYO-hv6sHbODN832B1UzWL5aujlS_uVdm4qWaa0gLrgzEqjoNMjwp3d19lP4sXttxmJaMraL27Tzvb0E6Bso6STIfV_KXq3pqUT_38L7BO4JPTTt-g_9aRRYpo-z37LqwgEAIEjKYvjdz__w3wr5laiUrU_eUOGtSOvTaqlU4_uD0Jjf6VlOoaAd30UVWtjkDw0z8ypBaRLT9KL5ETIz061TDMLK5e4AOLDlMO_LDCFx9ApdX_764uYm0tHRPLqt11A2fc6i57d0ju8z5a3cUhlHvPR4vDqCdX9qfFy_R-Sgj8EuzJjG38qbTjgC00CxQeigfB_JOGgOSDvZtBMnztC9mHBr40dvUTPHVZJhqkWTyl1Zh9_pewcZSS4jJ95QDUsaDcQ=w500-h500-s-no?authuser=0" width="47px" alt="" />
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaX7_VNLrmw3edYOqlhJBBLwNvDKRkZwc3yf4ATjQt8-sIXlq8KF5A7153yRvGTTPeuBYSM4eJnV1B1dkm-3L4OipUYrPeb1D_uH30S0CZ096XkrMFG1Oc6VDXDCs5GasUFlYy3wuOWFvNfo9oJ3yjTu_homxj0l_qchIL5592jjmIKtDjTMRPnlPwgy21vwBFDyctqr-GNzulz6iyjsVRLbsD8qfcbaJQhf1krxIdVQ-HJGJNuWCTmz6sdDo-wXVeeUbYrn5YPVKO_F4cRGSEceWpgH0_n_pIztfxIMLvdE12xzgMPxKvxqrTYNFw2D0eAA4ZDAyQWCBcyyD9NtOZsU9tgWh6B95qZ6hxpP77T-OPyk2xXYMkMvZCBQ4XZXYfnQvaYc6_Gsx8NUn3MgKlmRBFqYTaTdM4ciW5V3_FLoI-VgvYSs-IAF19cF2ZGXIeKt792fZrw4Rs-4e3FbJVEje77fZJ8CmDHvpAl9mpwE44_xVO9ed3qwc-pnY5ym2wlFf6VctJWdu6vSXMYHAQ_3FevyS3hoYmM3mWBLfIs8VT_sT5H5fi4nsUoyXZVNmP3K-ResH2sSuMO0oq7I4iThMSsV9hGdexmJbqoz8X7-5QLeHmwCQ8UAbkA3qQTZFREg83VcQMuThH9n3W519DLKrf0O5BN5ePqz-Tf5kCXkpkf-Mp9fZQ0ZyHQLY3ci-C-DeNn_I042mc5LijICJ0w43UOZRpJJSyPsy1FTObPTQSBuLnrCIR3I-bQPm7DxNDH3oN-FrCizxqxhT3mb9_92GadO3UX-DrN2BySNB2bq9pBqLgeKBwOBVPggNd6PupZDkeC-azTKVZ7aKGczKEvk3Hu5PsdPfkZ0C30m3jTZdnSO5IhR5IDVWhIgSQPkH-gLEv9JJOIiNsEKdLVmYQ=w500-h500-s-no?authuser=0" width="47px" alt="" />
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaVx0L-QevU1oSlDaelaKC1QYOlio5mZNHldUbcjKG4haVVLNpU15HaW2bqTb24_oN7NvynuxU1n1jHuAVOw2F6aB8TmhC_qFIeRT859pBqX4hIcReSi5YbzxJ-kLvp9wsQU9GQE4teeYS8q6omJApAtOlH3ELwcmV5_27SKtrl5xJTh8-y7nK1_GHewDfeiQEsuruJMElWqR-cr2JFBP7kUAP-3cMuwwsSC6SXQjCOopNN4_1M5xSQTmy5fIBCuM6F11dQAx2FfA9tkW42-ul8yKsf5ydyTm4PN5PWBuZ9sHNHslj5atPaJkR_0TOZTymC8iZAiJWMhzzP5nFeBJ1XuDCSUK7FPCJFBv-3QZBWkRBP9bqhrEP0uWzFdH9rJelllIkMrZRt446vp5DqyTzVPvRsFWKW38HzmA4vmgReaAy-oNv86zbdcTnVzVkHqGueB-Q2Z0JdVIK2QnYQLn9Zu5CuOpORBD8PLzu7D5QUdNIX-CypXpGj4VrsH2EXm0Cw5SswwcdK458pvQEKlWcdVX-MrXPy37BFj7U_M29tZqOD6MB-YfpZtn8OF8ur3nkMubliKBM50QHxw8VVE3iyTVy6MtOhYgcoSDKAwUuawEcZ7JksibYPLj1QHN5k14kgPJyU3mRuuZ7CsYI48i4dZ8izliNa-ON_0f2UXwQrbGxtl7EgmUTUvTn_GPnKyNyzTsC0tuOpOkYICEXsuwGnayif2iXydgSpko-4mtL8GpWYYf5Y4Ir7OYWbvMEJQN0sXhaXzyEEF-nJokAUMdTCR7fedrkBKVnjyJ0QMMXOK0nZYtNghvbLFMBLlF3dWCpoyT6kpw8zJ7Ku3rjyMlKRWGt2K5wTVV46mRg2FAbjiTnXLns9OAyQbZs6O5wV6zWes7aJAzojNz8Jc0cO3IQ=w500-h500-s-no?authuser=0" width="47px" alt="" />
            
            </div>
            <div className="flex justify-center items-center p-6 lg:pl-20">
              <img className="ml-12 mr-12" src="https://lh3.googleusercontent.com/pw/AJFCJaV8sBmIhMmxGWsSfgMNKNg3-K8pI5uKdQ-XkBftWFU34aMCBCeVj7odfOZXfRcozXm59P17GbgKVtBHNJ8gN6xH0bH-mYyq6MMQ243NhAgQos16ZkV7Zrd54AdsV_oGWl3HLGrk6gw5zimZG3eDL2lNqA5_og7PVQII0M8i9pchZvsV1gcDj1ECu-ept5NSvN73KNoudYbJQh4hM73DnebfzLxpJ7xlQ_-Yr2KtAKRLUKsQC_e1UUfV8QK1z-psBrSJzH2_jh73WLZYM1Xru66-CICMiXnvdIefFs0WUIp-YPYGfzfZuIXOQ7kITiqkwHmuD0HZYbrzyft4FnNHXYhHFkEUmRZ0JGwDABx_9iCJhfY8o_Cj1oZRe_GU2XgEdbQjsVrZpR23Fdbhy-oOw5SfMYL0nUZPmr7-6Mp5LpebJC8vgs6T--iLQ2J-Af_FvTP5XowybStdjD9S4sfwC6H9AJEDaaw4-jnyP5uNjDLz4MXAMqtgeaoSBGapxydJweVmtWYMn5zAk7GifRaefBixbIUfPi5tAP-NEeC82BHq8IEjWjimUVnhEw6LoSLwseW6WAWcUdinvcmimUJExHedv_HHWlQz3gjpnXKtkH1i2h9WW8ih1lJqINcpOd3V_6lh9hN_cn3QOqO-8Z-E-4a75esLAnVfJ0i6qkw0Drfs-OOGzCMvpC7Tat4CgU0oNlsMDy9CxHp52-OInHfulDOG1VFkwqbRN__zwCsbRQucZs5jnucOZbDA49Qki2E3fjz1BsiTpobFqrcfmSBukYUEk9ymRUmJ9ll1xXegMKtWhXfbvhbHsHRsNSaep3L1xMXvRKsn9eboBd4J9JIlhLn1vCw5dwGfWcczomLfVtNKfhRLd19W0RaayGoCZgzURJo0mR3TQR6O2CmqIKtcnw=w500-h500-s-no?authuser=0" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://lh3.googleusercontent.com/pw/AJFCJaVYU5kgXFzPXaeqfrZhsTBfgqCP-N0HeKjz3eJJQkq4KnfoUNbXrcwtUUMgjYZ_aIImfztX19GUcp_rHm48OeCxwKAmIpwzNiiYqLY5mchCTJ_ilD1tnCOtKFgtFHLp5_Dkq7CqZT26pmsmbFE2ZgQbhVpg0zc-DMgst3l1oWAHd3V25Ja-RxWxXWGMrJCpDTR7Kful5hb-6aBKNhEf0mnMcOaJ9MexSFk3DZF-r9UEzQdAXEDZYw6WhVUy2rMlM6AJt-hL0wQIPJJoFxVL1o7SOiesko9xBsXxU_vpB5DLTvCqf4-Gvj3BpBX-Nzyv2dHkOaymD55j24fuYZrh2MKE0O9fLw2FoSK9W4gHJCPCkjpRxJ56k8VeONWr0DQsLv_QU8ChYdmrzN4MMuZSXSpY2G7rL9SXJXXVtiB_IGRGdPsra7W4itApiyhfwqNj30U6BBmcCKoJaVfTo79s2zikDwX9gmwJlU6HZgxUDdDBB42T80PDRyo8_ejOkOLQmWH8iXIr2kYVKrvyTKzNCdAlw_73rQqHsTVmbMsoHCd8QY5N-rzzPbm_2TYpzAg1TYccdZe29E5UtGqy6pvOQG-y7nuKW7aqbJjcgv8PSAcIx7PruBnSRBYr_LIu1aAVePWjlA6XdqgJLMmHrdpN8Favjor39wqJuRFWvSZ0wjhtxoOyXER0-ycBWG7BXtL3UNclyjaXzSqOz7db-wzTI71Xg75tv_mGw1tfDuFu0vksicSeIpep46V0837J7XwrTLU9ynyt-44c6Pu1PtKcC6gP0zAFTVyo0kjDiz6rG2kzUMNA2-mZnwRRHqHuWYGSesa8CuEPFFM3fxNlYC1zfV113bj9Nh9qIIsXUT-PYd2ld9q76clXP44IU_h8vqVB10tMiui3g2oJ4Y6lVddYag=w500-h500-s-no?authuser=0" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://lh3.googleusercontent.com/pw/AJFCJaVnXL__Smow6fH0QN9ia_2cSCIoXwevBW7pPtpGnHxfOggKhP7z0hsjal0MEUyIKuFdV8AsXjUFTyw7Y2I7anHZEoOQ1jVW8Lt66wKkGFEHfYkQD3poH4vChMCUwlMKf3AZ07Alr636uUddrtmACdzsUaKAn9FNwUyOb6NprOYXG_kjph92AuWKPiMTbM4PH6JB7Q0LzqN2EGGytghhl_C7Jo5AG1i6d_-ddhejZ1SxTQ3k0ykd0q5mmQ61cneJWhrNWUFc_ol5MC9BrqtdiWIq0fEmktVg2EfZwPRtBdyVOBYXp061f2UPRFVImt2VOyYDdocCRD8sN8aTrvmKxHlLhBpv_yVXx1x32bcSTf1ljlw8r674BJvrNpO5sI-nJgTrU1-G8NZCKuqF9zy60yPRFnYj-ZFXsy43M-cS9OxGCMTMdp5jWH7Ho8ZP4Gj90Tk2uO4T3vhx1Q91wZiLWOXSjUuVrBBlwZKB_dLbjbSJpDTxIDWsU9bCQclEGtZ9xS9d4sz7sZDvoyx6hVRz2Uj8ZmohLUttmKngnCbQecKuf0XucCqoM2hthxCp03pHsVl0Ee5DMhL_PZ73NmKkjCI7kEmeVXWnTduaeDwAJ3Tvs0atxWv7ReFddwUbZmRR1NAu8FRqxt1zd13sZ1U_P_SjAj_tEAlkEx3Tkg3qZlmI_81B65yMIo20k7e7C8Qa1rk8-qqMNVwC2u3JCflOuD7pjoHX9-XhxF7pYKm6x4pdIS0t1tEFrvlYa35TZboWaABVwCrUqZe7EgrnnsY9tMPbNYkwDbyS8Cq4tZ-8FxH0bzbGyL-uQF-71hqWgTN2MHaae-0k4HZXOyEqjZAcdrazmwR4IduPdMAUAKMYkVj--CJ1bnd5lg-_1sfAZlNMpqO190TNcRzpoSMRXAvLjw=w500-h500-s-no?authuser=0" width="51px" alt="" />
              <img className="ml-12 mr-12" src="https://lh3.googleusercontent.com/pw/AJFCJaW3GyqrQFHKu8PSKAtLhxNYbcsXbQaLQ5G7nzt38A1igA5aEnrgqjmWtUvpqDo6_TvTUOyUy9MrlVtLmONE4lL_HpaO1RPXeSIizVn4dgAEvOi_CZNpe3sZDu3f6X33Gvr-eChWKWkWBxxYdBh7wLXdwnCd4HFbsYDiJK1SwTFW-2EWRwkLUOQ20X2ykAljwWDIIjp4m-bQKf7LFstSqKlAVJszMkEW9jjN7_WlRo4GpcizGO5zO6jgAUgZxH5I12nGB_z-WWYTDjoQGIwZUGJYwH0BTLWjkz6hWwWJTwpg8umXStEMG6axfbzPJIzk_Su2FkbRbraVAVrU6nFTPyAJakgT_IHJcTOf9JleEhE-N2Fgv0SnoOEJe1n6fjdiykqKid5pE8s-mfbwMFxIEDW2V-s6EFh1qOUrRvfjH__qFSfhv4sawCEk-H2cyfW18pbUth4aSfmtV_dJc3X08yzgJDMaA_X3OdG76niNCR_IWLuVbvOrknqfBEmA34D2TJNhIAcMdbnTXjSOx1q30wlEaJNKLHUKkCJhZORKyboGxIl8hBvmgAN2ilTBM8UhXWjJ07Xx3nWZFe3SE_3Z5wV6kbft0qJ84OpnUl3D488w65j3iNtOWBUMfbRjTC2jl5nv1HERi0tu2DNWZeY4OnmmA524_g6vTCgEVwfZiL5LQ_2_QklLLmrzWfSIcrKWcEFdt9ogK721QDht9DUJWBuuErLnno4nSBf1fushhysqkDSP19umfFeUoC8nNjLGoaH7YUJ9eCsnUjFlJNUdUi85UQljS6RrRcf274BQXIbh3Saz-yfW7MV3MdpfbnrbtsYZ2y6Tp7vU0cjjCTkaxDAs17h7uo0Ycedz3Eed3O543Gk-yCb1QgJpTTpu6aNYkvZkA0y83oBSj-en_TkyMw=w500-h500-s-no?authuser=0" width="51px" alt="" />
              <img className="ml-12 mr-12"src="https://lh3.googleusercontent.com/pw/AJFCJaVuZfiQpKw6lKDzbOJVy-wsWJbkyi-QBAmQXSsqvb8AJRxGkM95wRhDvCjkbOKAZDrFUYnrcp_ZwORNwiuv9s5z77xV0RyWk7kwiVYBZJw93XoQJPkKKvZCGhbC2fMD38oOw26Ix04FBSSqWd1WV4v_7_oicNtVRY3TapDDzXepc4Gd4ThlPT0nMVALqt2bzcUSPkulRcYC0lJCuA-FnjG5Jk5FQq9MrgMhdCy_BHaZ0D4NtfzS8qeR3GIK5caSd37zv4ZTGSxD8wvqMYTg1gMCble1hBUKlt-RVXcOM3hKICiCtDI2d-1m7kGm72Q0fp6-CpM9VN_TXphkYIzrm0blYyUkwM25bjf066C1lknk-2y0iQFiPpatlieBnL85W4j86QW9bkHIbNWSqX5jD1-LPwlc7732dFyGpfBJ-DHXMSFf-ACM3u6OMLLpplaIocsVLnp_hHhY3xMjF4eukPBEDVq4rCR_83ZfMrHFIypptAnDgHwVvEV_GAZPEB326cx29vnYevjeAJSiNaatIMYBef18VVQkEhySYW21PgBpT8gK94enpdckbMgNWX-90jTfwLPFrMalyWW1R_SFCUm64uW4pK6p-EI8PM8B4FFN7o259EiFbaPZnRRuaZdmpZZFJIdqbzKQrfKgJ4s6z26iuJBulLJCyfrXkpvccJJ71F3yo4OjfscdGWHGjelBn8rH_SEnXIR4YukpjBRvjArTFOEiP8F5U2voMrsaDx2fXc-0JCgpPXpsEoGKa7Kc-R3HYqGqxgChP70l4BmYWY_6ovHkKgS4DpuNKKjQ7o3KUW1gmUksK_5eafM2nCnLs1Z5BAS94oNj_eoY3mtAuLWII3HJ8dmT2pBbzA9a2H7ZOsdlxpLCv5_Ve1lbANT9M9pU8-UwjH0_0Q_FY6pRsQ=w500-h500-s-no?authuser=0" width="51px" alt="" />
            

            </div>
            <div className="flex justify-center items-center p-6 lg:pl-20">
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaUGj3vpe_f4hpJwUrYhB_OrDc1ZEEQ0LE4Lsj5WY2hxGagZrcPT7AzdOPc0JaoyXFjZLZJOHwkMVERqbWtep7mCW4J-pLw44Dw3FfgeIhV03uDcrXvNKvPEgwTWzLfdeDhWkkpUtSve9MamK7MiUp_olI9y18ZQ8qMqF6KVAnnjY-AFR8M2tRrAJO0CUmEm4wbLk7QTAOMY0u19rIpx9O7REexlB9nylYSvl7KrCJvGckHqN6LC_CN-wY7hYCsyn2Xl0bRfX6iSM3d0VUN5kREDFj1enHWPm-z5txnL-UHDXf_U77ooJeGciCcV6f7uNyECQpxGhblwWSRJmeZN25xrKf5izMN0ykJnXW_iXrjz-AjIo5ToRU7B-E279cbmELfFMS-LuaeUKMdWW1RUW9wd3_b7UM0CzUoT7qqIk-kh9hPAovSGObe_Psm-N_mqyeIDEOBwUbF4DCgoth1f6Xg3sL4s2inuQgY0itPSoyqbOZhOEI47AVGo4n-hzSzqK62nriF-V2VsjPQOY0-6PbDXwux5k9oPaX4ARpaz1T2TrtlVXGQa2M0m2Dt8tFzh2XyGTaZ7L6a6xyv5sFIGgDZq3vr8BknTS7nijewdQ4G1VOJ4CvYrhUhQI3OJJnxM9B6MwtrvvFQon9AVZSjEcUf8jWUKRhSYT1I35ODgCsKWnt3Uo3EGa0-cMQCYawgZAwQMUVdBT4z9Rp7uFNS_Cnwy_reSdx-LX-KPk2X94k79zPUGGT9sBmpYmuYTQdGXeoqTtkhvojQNtKh7Kz-eBlb385O6LoJ--yZ-55rjAxvT9BQ4BIHkl2qdD_B0es1PH6zXuBfxHxlTE9LwZHXwMKQC1uOXZ66jl8a5cm4Kvvm2NTX6EP0jeT5KfPctBe8wwJia-g9QKYHB8bGQSh5EiQ=w500-h500-s-no?authuser=0" width='47px' alt="" />
              <img  className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaXvoeAA05mpfXgMp37ZRCp9dOeEaNSMA4gF12MjVs3Vx4Nc-PNsDy0fvSlOGnzt5jMCn7iYN1AhD0yZn0pzhaeZTvkrVgbqhTb6ygAs1G805H0yVg82WUcGImafJsudlL5jxqqC_srSCpIeYKzmWF0e1aVd61hxHNX-xtkIspkcZWTr20wtXIQzEVBhR5na8aeVBXIecg3Ciu7YZd1bSJ8MgoFYNCr1BJuiRdcKT0lsSyLhHMUOnQhMBYbqGvLekcXcscrkEeWMoK89ZvBtgEw_BzkAyWQh8jXAYxNgI3jnPOxcpRXLO99pr5bielA7NHH0V-MEPCvqicBG9RjrXUGalgmnRneU3w3rMGRaB7zzY2jfWPTI4q-cIdZDf0CpspaPqpXKJOaICIs-oG3PZCSC92L9U2YoXmGS7NeDl1cfxgLV1EVe3sB5J-6Cc7Tbs00Slx43LVnCcXgrJM-c7v1HSsUyMlITkPl6Itai1UTSk-jXTLyKNHy-nIGtRj293Y4a6g0vYCnq_wXqLqkhuEIlenUWv75pJlMBaC3Hx8u4dG7W3r4-06xcbjWuOQVYHhuA-GfHwSr1jYawzuFXsjM_RwszTXJMc_6RTrVcxio4l19ukosGRRgwils7uUTI1h2bP2RQdybvK5Kjj2MPJJuGgNZ6buBBshtSbbsi5Ovh4xpZmMnFZ7lf0VHG047DhVlqCMn-KYtAbbjpCmoMX0MicQkbW6q7VJL6sStFerJJUr6R1RlT5QszCS5KXrxbRy7Y58Ro3MhPnEESR41DnFCys5s7pE0lO6lV0XHWBy7sA7Zsq2cPmuvVkZlFn1ngs1C1bfBSh0Vw_jEos3ikXyVerSq8JpgHJ0DAymj5F1g9-6P3ln-8rmBJ9owbTGbzDLqXPGsHU7lMEwQEcIEZXQ=w500-h500-s-no?authuser=0" width='47px' alt="" />
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaXJSZjwXg79QiSjbVYXLR9ZqIsuyTwcXDhrJAcd1WtKk3b2wINjLwrsb8XDjitMZN1HbgAGGYlx9iNRffbHs1SEWOmkHBAmG1bp8lFEBO2pjFg2zse-KwrV44-3-w3WYY53QXCyu2iXIypIlLcNewCDGD_c1Cb2T5PRkFGvJ5i7ePkacKyOUQOx8VeV-mL38QX0qzWBzfev7Q765nR9bu_RIXTLTlAfSzoU7kL4eyWXl9NcJVSoXWkqolfy6mv-5AJY8zzNBW3EIp7bdur1jFdERBv-14LPuASFOV_TmmqU5XeIdv2Ew-xBccTTYXlhggaJK2UJN3HA2-xdLejBeh9_y-n1uuFvFacBEVzLYv40SRPO_aU7f9Gex3w8d5giki6ZLJ38DpMfC6ldfQoUON7ciNkTnbX-SA6Ga2yHeleJrqKQnSjwnBX-xuLq-3S5K4c_Qd7tJi2b_Du9HC4KTeoT1kiD5rpVyittB2VF0daBBZD_uzJSCQYCI5RlXyn_PVIrsj8yyo4fZ22VqydIuUGyULjPC5ujmIzLfI1q2-dMK14eGBperI7wuVLaIHhd4RuSB870yNHIeF3YdJ_5JZKNNbZJnKgdTTa7SHJONZShfAk_bKpooYTIH3Rf_agNXey2GG320Q4z2flDreOw4u-SXNgLVGDqISE7wMtrMD9LVOQ7-PHE2tt7PT0SCqOsUN-4A8h9QOWix7tGB7YbNX3NeR4mFw3BWueW_QBq0SH48J4cJgMsJno4iN0KtxAYpmgRnoyVnVs6XaCiy6E1h9uP02dIeHIoor_S-9bwiWzGlaf79hnlQgwXIAEHvhgAeZUSwu3e-OOZ6NPhUsxU-FHemA_wRgvp9S1MMSiRHFGmORxZf9ksrmXuhgKLSIhAT29nxDOo8oXVBmYynK5RVA=w500-h500-s-no?authuser=0" width='47px' alt="" />
              <img className="ml-9 mr-9" src="https://lh3.googleusercontent.com/pw/AJFCJaUVGMVPO8RaBHyezfXCt3JnPHtIA20tXdjo0G4CXb9CZQKE5nx_O6Iu-in5dnuMjlSGmBWyt_-Y7cNO07wqDhaAIM9rZ4vuHcw6bm7msXhJXGgtTApL4a69fPGy1fCrCLMWJ4o9PD_xV8n6ROfu7QrY9Hm4dbdo3KgRcbkWIm6aW8kKXnjIEahnW1W9KDsyRCz-Wzbe7qcC_S3Fm3tqt1gW5ztIwPHbbKo4I1pwyKagvNq7Bk8VyJpgFSG99kjrTNcD7il3deCWm6qe8XLGtdVF6VMAhQMMIZjT9A8PgP4fbjiDE861GKv894dQioVBfjrUEvSJHZrvlEM2i7JDkOQWns2VRdMvUHM-zWb5dUiaMn1qGCYI8FeAufOaHOjAIlVnsnzMNRAq98OIWuB9jhYXTC_TlOir9aN6h3sn4VQUgRmNZbyHle1TuojDNfnrkthHK751Rbdbuvwh3hy1yxCRShchXxXBYxpCxVRjZvBGneu-zxYK7it8JZDR61gZnQbh4RfW50GQnhipy-t5DUEbz7aiVu_m8LpF3vqrw3OBRn0XS6SRLMUEMsVB3Zvs6qvioVo67FktP0T1A6hiXSBN-NkAw7GbP_iSEctblI4OiP5UYYqZZlJXY-s2r7n0UkETw_klJQ03rxoW4ctk8KQRLc2-b07PePmrYM7HhEFSzt8MtS3jTJikEUiV0ePJbMK99_oOg1M8bmBm3UX0eqMqAvb8ZJxUoqZqU1R_3SNHUml3EraKOsw7oOF6B8BUkgRzszHDd-CzXoMONsERkNCK2HGY1wRjbGtMEvZVcEfIz7j1UG0taML94h4CvrlTG0943xeSbutm5MzQ0Owq-ow00NDLFjMndvmxtE6pgmPDTiokgCdBkfjRb6g9OxcnEaF4wqE9u8lvf5etT3Y4MA=w500-h500-s-no?authuser=0" width='47px' alt="" />

              <img className="ml-9 mr-9"src="https://lh3.googleusercontent.com/pw/AJFCJaUoYcGxgVVaqTSJWr-A2P6PlFLJBPSpjIdLhDOXoipCZC2hjlyLUj2h4sdo8wPBK1z5qhTAqzsEd3VTMgd6ioZGkFW2Wx579btHAWCNrq6meDi23SRf3SZ0OmhR6mDJaaXWOCS9O63MYqO9aEYPJ4NwVR4ynCr5LdFDCRbH1Bc8ZNmKOMpjawGbPVZ7e-4KFKbICsIV2ezwgtsE3w1YDaC7fMWJdZ1-_bAVgNdrNwRRjY6E1kymLpapdJ1KGP6W55rsa6kt55UrKU07vSa-BOfbw9PYVD7qZDmXlWRj_Igo1jlAne0rm3DUIgNieENuEwXU_DpbkYdD1WdehTV5lyOfL94W-GOs8LwCrBiu8RqTh-xFKfTb97AVD-BYrmKB5ql5Z3uzSSohq_khAVYaklAh5bkjinxWJW0RHyD0eeJp_yTLSV33sO6XIeNmJFG1rrOKYaSXtXu_4fc0_I5rF-lhnVT0LG9ZoLvf_LIjOaFeFOsMMxLWdwu30pC8XF3yaqKpM2nOlXov2MFsEgJvhsAf7fbgXhTeVniBFtOUnYqcEMy-amXh8gKixDnxOBqmhhzeBzj_ZSYizc9PYw56qQ3EJ675LBTIlAS8mNAYyH0ESM8g41PatOmrB8maZiVcy5CUhXOihukN1D9EZppVhmAKLwX_7E9ar1x4jT_YsbsflOSSYvyiOMIiVgNY8d2PII7NdpX_EgqfhcREF1mUd9sKRPL3M7bCGeKKDVDmW11nii0x1BIQ1UjcREQ7v-0HbA7V7WmKHhRKy_CLfbHaBAyLiTI8nPshre2TNlzkdBqPqxmsgi6CB25t_5iY5zJ44aKiNji_MMED4czH_nSmPBt_maQkzHX-VAT9xzvwtNBZ0PUnPVV8u9sxWSoGhiZuw64vXbqUZB4vd6IVcE15Bg=w500-h500-s-no?authuser=0" width='47px' alt="" />

            </div>
            

          

      

          </div>
        </Fade>
      </div>
    </Wrapper>
  );


}
