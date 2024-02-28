import React from 'react'

const Privacy = () => {
  return (
<div className=" bg-base-black min-h-screen  w-screen">
  <div className="absolute top-0 z-10 w-screen bg-black px-6 ">
    <a
      data-testid="welcome-logo"
      className="flex h-20 flex-1 items-center gap-3 py-5 "
      href="/"
    >
      <svg
        width={27}
        height={33}
        viewBox="0 0 27 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-layout/ground dark:fill-layout/dark-foreground aspect-square h-full w-10 self-start"
      >
        <path
          d="M7.25414 4.98142L18.6774 12.1931C18.9393 12.3597 19.2651 12.3559 19.5271 12.1876L24.8681 8.72234C25.4076 8.37267 25.4007 7.52902 24.8543 7.19045L13.4501 0.119332C13.1933 -0.0397773 12.8779 -0.0397773 12.6211 0.119332L7.25931 3.44213C6.70952 3.78255 6.70607 4.6336 7.25414 4.97957V4.98142Z"
          fill="white"
        />
        <path
          d="M25.2042 11.7195L22.226 13.5308C21.8744 13.7435 21.8796 14.2875 22.2346 14.4947L25.2576 16.2597C25.6247 16.4743 26.0694 16.1894 26.0694 15.7416V12.2616C26.0694 11.7843 25.5903 11.4845 25.2042 11.7195Z"
          fill="white"
        />
        <path
          d="M25.6575 19.6694L3.88128 6.06373C3.62104 5.90092 3.29702 5.90277 3.0385 6.06928L0.405018 7.76028C0.155113 7.92124 0.00172348 8.21171 0.00172348 8.52437V11.9489C0.00172348 12.2671 0.160284 12.5613 0.415359 12.7204L22.0054 26.1023C22.2622 26.2614 22.5776 26.2614 22.8344 26.1023L25.6523 24.3558C25.9091 24.1966 26.0659 23.9025 26.0659 23.5843V20.4409C26.0659 20.1246 25.9091 19.8304 25.654 19.6713L25.6575 19.6694Z"
          fill="white"
        />
        <path
          d="M3.73651 17.9211L0.823824 16.0987C0.458446 15.8712 0 16.1524 0 16.6056V20.0302C0 20.4668 0.439488 20.7406 0.791078 20.5242L3.73134 18.724C4.02088 18.5464 4.02261 18.1005 3.73479 17.9211H3.73651Z"
          fill="white"
        />
        <path
          d="M18.5653 27.2068L7.29378 20.2041C7.04043 20.0468 6.72848 20.045 6.4734 20.1986L1.27193 23.3326C0.711798 23.6712 0.706628 24.5352 1.26331 24.8793L12.6211 31.919C12.8779 32.0781 13.1933 32.0781 13.4501 31.919L18.5653 28.7479C19.1169 28.4056 19.1186 27.5509 18.5653 27.2068Z"
          fill="white"
        />
      </svg>
      <svg
        width={123}
        height={14}
        viewBox="0 0 123 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-layout/ground "
      >
        <path
          d="M0 10.0107C0 9.86585 0.106671 9.74709 0.238182 9.74709L9.99781 9.76592C10.5253 9.76592 10.8673 9.71378 11.0251 9.61096C11.1829 9.50813 11.2618 9.32709 11.2618 9.06785C11.2618 8.82165 11.1858 8.66089 11.0338 8.58268C10.8819 8.50448 10.5531 8.46682 10.0504 8.46682H2.70622C1.89815 8.46682 1.25375 8.20179 0.772997 7.67027C0.292248 7.14021 0.0526047 6.42766 0.0526047 5.53407V3.14588C0.0526047 2.25229 0.292248 1.54119 0.772997 1.00968C1.25375 0.478164 1.89815 0.211682 2.70622 0.211682H14.7775C15.5739 0.211682 16.2125 0.476715 16.6932 1.00823C17.174 1.53975 17.4136 2.25085 17.4136 3.14443V3.83236C17.4136 3.97718 17.3069 4.09594 17.1754 4.09594H7.32666C7.06949 4.09594 6.86637 4.09884 6.72025 4.10608C6.57413 4.11332 6.46307 4.13215 6.38709 4.16401C6.3111 4.19587 6.26142 4.24801 6.23804 4.31898C6.21466 4.38994 6.20297 4.49132 6.20297 4.62022C6.20297 4.74911 6.21466 4.85049 6.23804 4.92146C6.26142 4.99242 6.3111 5.04746 6.38709 5.08656C6.46307 5.12566 6.57413 5.14883 6.72025 5.15463C6.86637 5.16187 7.06802 5.16477 7.32666 5.16477H14.76C15.5681 5.16477 16.2125 5.4298 16.6932 5.96131C17.174 6.49283 17.4136 7.20393 17.4136 8.09751V10.8738C17.4136 11.7674 17.174 12.48 16.6932 13.01C16.2125 13.5416 15.5695 13.8066 14.76 13.8066H2.65361C1.84555 13.8066 1.20114 13.5416 0.720392 13.01C0.239644 12.48 0 11.7674 0 10.8738V10.0107Z"
          fill="white"
        />
        <path
          d="M18.7404 0.250785H24.413C24.5445 0.250785 24.6511 0.368095 24.6511 0.51437V8.45523C24.6511 8.60006 24.7578 8.71882 24.8893 8.71882H29.4864C29.6179 8.71882 29.7246 8.60151 29.7246 8.45523V0.51437C29.7246 0.369543 29.8312 0.250785 29.9628 0.250785H35.6353C35.7668 0.250785 35.8735 0.368095 35.8735 0.51437V8.81585C35.8735 9.57909 35.7653 10.2685 35.5491 10.884C35.3328 11.4995 35.0245 12.0238 34.627 12.4568C34.2281 12.8913 33.7488 13.2244 33.1863 13.4576C32.6237 13.6907 32.0026 13.8066 31.3232 13.8066L23.035 13.7096C22.3555 13.7096 21.7374 13.5865 21.1807 13.3403C20.624 13.094 20.1476 12.7508 19.7487 12.3105C19.3498 11.8703 19.0429 11.3402 18.8266 10.7189C18.6104 10.0976 18.5022 9.41109 18.5022 8.66089V0.51437C18.5022 0.369543 18.6089 0.250785 18.7404 0.250785Z"
          fill="white"
        />
        <path
          d="M55.0172 13.8051C54.8857 13.8051 54.779 13.6878 54.779 13.5416V5.71801C54.779 5.57318 54.6723 5.45442 54.5408 5.45442H53.9154C53.8117 5.45442 53.7211 5.52828 53.6889 5.6369L51.3539 13.6227C51.3217 13.7313 51.2311 13.8051 51.1274 13.8051H46.7305C46.6268 13.8051 46.5362 13.7313 46.504 13.6227L44.1689 5.6369C44.1368 5.52828 44.0462 5.45442 43.9425 5.45442H43.317C43.1855 5.45442 43.0789 5.57318 43.0789 5.71801L43.0949 13.5401C43.0949 13.6864 42.9883 13.8037 42.8568 13.8037H37.1667C37.0352 13.8037 36.9285 13.6864 36.9285 13.5401V2.27112C36.9285 1.64981 37.0922 1.15161 37.4209 0.775059C37.7482 0.399957 38.1822 0.211682 38.7214 0.211682H47.201C47.3004 0.211682 47.3895 0.279751 47.4246 0.382578L48.6097 5.33421C48.6447 5.43704 48.7339 5.50511 48.8332 5.50511H49.029C49.1299 5.50511 49.219 5.43559 49.2526 5.33132L50.4041 0.384026C50.4377 0.279751 50.5283 0.210234 50.6276 0.210234H59.1058C59.6566 0.210234 60.0979 0.398509 60.4326 0.773611C60.7672 1.14871 60.9338 1.64692 60.9338 2.26967V13.5416C60.9338 13.6864 60.8271 13.8051 60.6956 13.8051H55.0172Z"
          fill="white"
        />
        <path
          d="M80.0716 13.8051C79.9401 13.8051 79.8335 13.6878 79.8335 13.5416V5.71801C79.8335 5.57318 79.7268 5.45442 79.5953 5.45442H78.9699C78.8661 5.45442 78.7755 5.52828 78.7434 5.6369L76.4083 13.6227C76.3762 13.7313 76.2856 13.8051 76.1818 13.8051H71.785C71.6812 13.8051 71.5906 13.7313 71.5585 13.6227L69.2234 5.6369C69.1912 5.52828 69.1006 5.45442 68.9969 5.45442H68.3715C68.24 5.45442 68.1333 5.57318 68.1333 5.71801L68.1494 13.5401C68.1494 13.6864 68.0427 13.8037 67.9112 13.8037H62.2211C62.0896 13.8037 61.9829 13.6864 61.9829 13.5401V2.27112C61.9829 1.64981 62.1466 1.15161 62.4754 0.775059C62.8027 0.399957 63.2367 0.211682 63.7759 0.211682H72.2555C72.3548 0.211682 72.444 0.279751 72.479 0.382578L73.6641 5.33421C73.6992 5.43704 73.7883 5.50511 73.8877 5.50511H74.0835C74.1843 5.50511 74.2734 5.43559 74.307 5.33132L75.4585 0.384026C75.4921 0.279751 75.5827 0.210234 75.6821 0.210234H84.1602C84.7111 0.210234 85.1524 0.398509 85.487 0.773611C85.8216 1.14871 85.9882 1.64692 85.9882 2.26967V13.5416C85.9882 13.6864 85.8815 13.8051 85.75 13.8051H80.0716Z"
          fill="white"
        />
        <path
          d="M101.482 0.192855C102.29 0.192855 102.934 0.457888 103.415 0.989403C103.896 1.52092 104.135 2.23202 104.135 3.1256V10.855C104.135 11.7486 103.896 12.4612 103.415 12.9912C102.934 13.5227 102.291 13.7878 101.482 13.7878L89.691 13.8066C88.8946 13.8066 88.2561 13.5387 87.7753 13.0014C87.2946 12.464 87.0549 11.7558 87.0549 10.8753V3.10533C87.0549 2.22478 87.2946 1.51947 87.7753 0.987955C88.2561 0.45644 88.8932 0.191406 89.691 0.191406H101.482V0.192855ZM97.985 8.29882V5.69918C97.985 5.55435 97.8783 5.43559 97.7468 5.43559H93.442C93.3105 5.43559 93.2038 5.5529 93.2038 5.69918V8.29882C93.2038 8.44365 93.3105 8.56241 93.442 8.56241H97.7468C97.8783 8.56241 97.985 8.4451 97.985 8.29882Z"
          fill="white"
        />
        <path
          d="M105.114 13.5416V0.465129C105.114 0.320302 105.221 0.201544 105.353 0.201544H111.173C111.234 0.201544 111.294 0.227613 111.338 0.275406L116.109 6.73614C116.153 6.78393 116.213 6.81 116.274 6.81H116.609C116.74 6.81 116.847 6.69269 116.847 6.54641V2.14512C116.847 1.56147 117.007 1.09223 117.33 0.735956C117.653 0.379681 118.077 0.201544 118.605 0.201544H122.762C122.893 0.201544 123 0.318854 123 0.465129V13.543C123 13.6878 122.893 13.8066 122.762 13.8066H116.942C116.88 13.8066 116.82 13.7805 116.777 13.7327L111.988 7.21407C111.944 7.16627 111.884 7.14021 111.823 7.14021H111.507C111.376 7.14021 111.269 7.25752 111.269 7.40379V11.8833C111.269 12.4669 111.108 12.9362 110.785 13.2925C110.463 13.6487 110.039 13.8196 109.511 13.808H105.354C105.223 13.808 105.116 13.6907 105.116 13.5445L105.114 13.5416Z"
          fill="white"
        />
      </svg>
    </a>
  </div>
  <div className="px-5 pt-20 md:px-0">
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 px-5 py-10 text-center">
      <h2 className="text-base-white text-2xl uppercase sm:text-4xl xl:text-6xl">
        Privacy
      </h2>
      <p className="text-base text-gray-300 sm:text-lg  xl:text-2xl">
        Last Updated June 1, 2023
      </p>
    </div>
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <div>
        <h5 className="text-white">1. Introduction</h5>
        <p>
          Welcome to Summon. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website
          www.summon.xyz and use our Services. Please read this Privacy Policy
          carefully. If you do not agree with the terms of this Privacy Policy,
          please do not access the Website.
        </p>
      </div>
      <div>
        <h5 className="text-white">2. Collection of Your Information</h5>
        <p>
          We may collect information about you in a variety of ways. The
          information we may collect on the Website includes:
        </p>
      </div>
      <div>
        <h5 className="text-white">2.1 Personal Data</h5>
        <p>
          Personally identifiable information, such as your name, email address,
          and telephone number, and demographic information, such as your age,
          gender, hometown, and interests, that you voluntarily give to us when
          you register with the Website or when you choose to participate in
          various activities related to the Website and our Services.
        </p>
      </div>
      <div>
        <h5 className="text-white">2.2 Derivative Data</h5>
        <p>
          Information our servers automatically collect when you access the
          Website, such as your IP address, your browser type, your operating
          system, your access times, and the pages you have viewed directly
          before and after accessing the Website.
        </p>
      </div>
      <div>
        <h5 className="text-white">3. Use of Your Information</h5>
        <p>
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the Website to:
        </p>
        <ol className="list-disc pl-5">
          <li>Administer sweepstakes, promotions, and contests.</li>
          <li>Assist law enforcement and respond to subpoena.</li>
          <li>
            Compile anonymous statistical data and analysis for use internally
            or with third parties.
          </li>
          <li>Create and manage your account.</li>
          <li>
            Deliver targeted advertising, coupons, newsletters, and other
            information regarding promotions and the Website to you.
          </li>
        </ol>
        <p />
      </div>
      <div>
        <h5 className="text-white">4. Disclosure of Your Information</h5>
        <p>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </p>
      </div>
      <div>
        <h5 className="text-white">4.1 By Law or to Protect Rights</h5>
        <p>
          If we believe the release of information about you is necessary to
          respond to legal process, to investigate or remedy potential
          violations of our policies, or to protect the rights, property, and
          safety of others, we may share your information as permitted or
          required by any applicable law, rule, or regulation.
        </p>
      </div>
      <div>
        <h5 className="text-white">4.2 Third-Party Service Providers</h5>
        <p>
          We may share your information with third parties that perform services
          for us or on our behalf, including payment processing, data analysis,
          email delivery, hosting services, customer service, and marketing
          assistance.
        </p>
      </div>
      <div>
        <h5 className="text-white">5. Security of Your Information</h5>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </p>
      </div>
      <div>
        <h5 className="text-white">6. Policy for Children</h5>
        <p>
          We do not knowingly solicit information from or market to children
          under the age of 13. If you become aware of any data we have collected
          from children under age 13, please contact us using the contact
          information provided below.
        </p>
      </div>
      <div>
        <h5 className="text-white">7. Contact Us</h5>
        <p>
          If you have any questions about these Terms, please contact us at
          legal@summon.xyz By using our Website and our Services, you agree to
          these Terms of Service.
        </p>
      </div>
      <h5 className="text-white">Last updated: June 1, 2023</h5>
      <footer aria-labelledby="footer-heading" className="z-10 w-screen">
        <div className=" flex w-full justify-center border-t border-gray-800 px-10 pb-8 pt-8">
          <div className="flex w-full flex-col justify-between sm:flex-row xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col justify-start gap-2">
              <div className="flex-start flex items-center gap-4 self-start">
                <svg
                  width={27}
                  height={33}
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25414 4.98142L18.6774 12.1931C18.9393 12.3597 19.2651 12.3559 19.5271 12.1876L24.8681 8.72234C25.4076 8.37267 25.4007 7.52902 24.8543 7.19045L13.4501 0.119332C13.1933 -0.0397773 12.8779 -0.0397773 12.6211 0.119332L7.25931 3.44213C6.70952 3.78255 6.70607 4.6336 7.25414 4.97957V4.98142Z"
                    fill="white"
                  />
                  <path
                    d="M25.2042 11.7195L22.226 13.5308C21.8744 13.7435 21.8796 14.2875 22.2346 14.4947L25.2576 16.2597C25.6247 16.4743 26.0694 16.1894 26.0694 15.7416V12.2616C26.0694 11.7843 25.5903 11.4845 25.2042 11.7195Z"
                    fill="white"
                  />
                  <path
                    d="M25.6575 19.6694L3.88128 6.06373C3.62104 5.90092 3.29702 5.90277 3.0385 6.06928L0.405018 7.76028C0.155113 7.92124 0.00172348 8.21171 0.00172348 8.52437V11.9489C0.00172348 12.2671 0.160284 12.5613 0.415359 12.7204L22.0054 26.1023C22.2622 26.2614 22.5776 26.2614 22.8344 26.1023L25.6523 24.3558C25.9091 24.1966 26.0659 23.9025 26.0659 23.5843V20.4409C26.0659 20.1246 25.9091 19.8304 25.654 19.6713L25.6575 19.6694Z"
                    fill="white"
                  />
                  <path
                    d="M3.73651 17.9211L0.823824 16.0987C0.458446 15.8712 0 16.1524 0 16.6056V20.0302C0 20.4668 0.439488 20.7406 0.791078 20.5242L3.73134 18.724C4.02088 18.5464 4.02261 18.1005 3.73479 17.9211H3.73651Z"
                    fill="white"
                  />
                  <path
                    d="M18.5653 27.2068L7.29378 20.2041C7.04043 20.0468 6.72848 20.045 6.4734 20.1986L1.27193 23.3326C0.711798 23.6712 0.706628 24.5352 1.26331 24.8793L12.6211 31.919C12.8779 32.0781 13.1933 32.0781 13.4501 31.919L18.5653 28.7479C19.1169 28.4056 19.1186 27.5509 18.5653 27.2068Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width={123}
                  height={14}
                  viewBox="0 0 123 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.0107C0 9.86585 0.106671 9.74709 0.238182 9.74709L9.99781 9.76592C10.5253 9.76592 10.8673 9.71378 11.0251 9.61096C11.1829 9.50813 11.2618 9.32709 11.2618 9.06785C11.2618 8.82165 11.1858 8.66089 11.0338 8.58268C10.8819 8.50448 10.5531 8.46682 10.0504 8.46682H2.70622C1.89815 8.46682 1.25375 8.20179 0.772997 7.67027C0.292248 7.14021 0.0526047 6.42766 0.0526047 5.53407V3.14588C0.0526047 2.25229 0.292248 1.54119 0.772997 1.00968C1.25375 0.478164 1.89815 0.211682 2.70622 0.211682H14.7775C15.5739 0.211682 16.2125 0.476715 16.6932 1.00823C17.174 1.53975 17.4136 2.25085 17.4136 3.14443V3.83236C17.4136 3.97718 17.3069 4.09594 17.1754 4.09594H7.32666C7.06949 4.09594 6.86637 4.09884 6.72025 4.10608C6.57413 4.11332 6.46307 4.13215 6.38709 4.16401C6.3111 4.19587 6.26142 4.24801 6.23804 4.31898C6.21466 4.38994 6.20297 4.49132 6.20297 4.62022C6.20297 4.74911 6.21466 4.85049 6.23804 4.92146C6.26142 4.99242 6.3111 5.04746 6.38709 5.08656C6.46307 5.12566 6.57413 5.14883 6.72025 5.15463C6.86637 5.16187 7.06802 5.16477 7.32666 5.16477H14.76C15.5681 5.16477 16.2125 5.4298 16.6932 5.96131C17.174 6.49283 17.4136 7.20393 17.4136 8.09751V10.8738C17.4136 11.7674 17.174 12.48 16.6932 13.01C16.2125 13.5416 15.5695 13.8066 14.76 13.8066H2.65361C1.84555 13.8066 1.20114 13.5416 0.720392 13.01C0.239644 12.48 0 11.7674 0 10.8738V10.0107Z"
                    fill="white"
                  />
                  <path
                    d="M18.7404 0.250785H24.413C24.5445 0.250785 24.6511 0.368095 24.6511 0.51437V8.45523C24.6511 8.60006 24.7578 8.71882 24.8893 8.71882H29.4864C29.6179 8.71882 29.7246 8.60151 29.7246 8.45523V0.51437C29.7246 0.369543 29.8312 0.250785 29.9628 0.250785H35.6353C35.7668 0.250785 35.8735 0.368095 35.8735 0.51437V8.81585C35.8735 9.57909 35.7653 10.2685 35.5491 10.884C35.3328 11.4995 35.0245 12.0238 34.627 12.4568C34.2281 12.8913 33.7488 13.2244 33.1863 13.4576C32.6237 13.6907 32.0026 13.8066 31.3232 13.8066L23.035 13.7096C22.3555 13.7096 21.7374 13.5865 21.1807 13.3403C20.624 13.094 20.1476 12.7508 19.7487 12.3105C19.3498 11.8703 19.0429 11.3402 18.8266 10.7189C18.6104 10.0976 18.5022 9.41109 18.5022 8.66089V0.51437C18.5022 0.369543 18.6089 0.250785 18.7404 0.250785Z"
                    fill="white"
                  />
                  <path
                    d="M55.0172 13.8051C54.8857 13.8051 54.779 13.6878 54.779 13.5416V5.71801C54.779 5.57318 54.6723 5.45442 54.5408 5.45442H53.9154C53.8117 5.45442 53.7211 5.52828 53.6889 5.6369L51.3539 13.6227C51.3217 13.7313 51.2311 13.8051 51.1274 13.8051H46.7305C46.6268 13.8051 46.5362 13.7313 46.504 13.6227L44.1689 5.6369C44.1368 5.52828 44.0462 5.45442 43.9425 5.45442H43.317C43.1855 5.45442 43.0789 5.57318 43.0789 5.71801L43.0949 13.5401C43.0949 13.6864 42.9883 13.8037 42.8568 13.8037H37.1667C37.0352 13.8037 36.9285 13.6864 36.9285 13.5401V2.27112C36.9285 1.64981 37.0922 1.15161 37.4209 0.775059C37.7482 0.399957 38.1822 0.211682 38.7214 0.211682H47.201C47.3004 0.211682 47.3895 0.279751 47.4246 0.382578L48.6097 5.33421C48.6447 5.43704 48.7339 5.50511 48.8332 5.50511H49.029C49.1299 5.50511 49.219 5.43559 49.2526 5.33132L50.4041 0.384026C50.4377 0.279751 50.5283 0.210234 50.6276 0.210234H59.1058C59.6566 0.210234 60.0979 0.398509 60.4326 0.773611C60.7672 1.14871 60.9338 1.64692 60.9338 2.26967V13.5416C60.9338 13.6864 60.8271 13.8051 60.6956 13.8051H55.0172Z"
                    fill="white"
                  />
                  <path
                    d="M80.0716 13.8051C79.9401 13.8051 79.8335 13.6878 79.8335 13.5416V5.71801C79.8335 5.57318 79.7268 5.45442 79.5953 5.45442H78.9699C78.8661 5.45442 78.7755 5.52828 78.7434 5.6369L76.4083 13.6227C76.3762 13.7313 76.2856 13.8051 76.1818 13.8051H71.785C71.6812 13.8051 71.5906 13.7313 71.5585 13.6227L69.2234 5.6369C69.1912 5.52828 69.1006 5.45442 68.9969 5.45442H68.3715C68.24 5.45442 68.1333 5.57318 68.1333 5.71801L68.1494 13.5401C68.1494 13.6864 68.0427 13.8037 67.9112 13.8037H62.2211C62.0896 13.8037 61.9829 13.6864 61.9829 13.5401V2.27112C61.9829 1.64981 62.1466 1.15161 62.4754 0.775059C62.8027 0.399957 63.2367 0.211682 63.7759 0.211682H72.2555C72.3548 0.211682 72.444 0.279751 72.479 0.382578L73.6641 5.33421C73.6992 5.43704 73.7883 5.50511 73.8877 5.50511H74.0835C74.1843 5.50511 74.2734 5.43559 74.307 5.33132L75.4585 0.384026C75.4921 0.279751 75.5827 0.210234 75.6821 0.210234H84.1602C84.7111 0.210234 85.1524 0.398509 85.487 0.773611C85.8216 1.14871 85.9882 1.64692 85.9882 2.26967V13.5416C85.9882 13.6864 85.8815 13.8051 85.75 13.8051H80.0716Z"
                    fill="white"
                  />
                  <path
                    d="M101.482 0.192855C102.29 0.192855 102.934 0.457888 103.415 0.989403C103.896 1.52092 104.135 2.23202 104.135 3.1256V10.855C104.135 11.7486 103.896 12.4612 103.415 12.9912C102.934 13.5227 102.291 13.7878 101.482 13.7878L89.691 13.8066C88.8946 13.8066 88.2561 13.5387 87.7753 13.0014C87.2946 12.464 87.0549 11.7558 87.0549 10.8753V3.10533C87.0549 2.22478 87.2946 1.51947 87.7753 0.987955C88.2561 0.45644 88.8932 0.191406 89.691 0.191406H101.482V0.192855ZM97.985 8.29882V5.69918C97.985 5.55435 97.8783 5.43559 97.7468 5.43559H93.442C93.3105 5.43559 93.2038 5.5529 93.2038 5.69918V8.29882C93.2038 8.44365 93.3105 8.56241 93.442 8.56241H97.7468C97.8783 8.56241 97.985 8.4451 97.985 8.29882Z"
                    fill="white"
                  />
                  <path
                    d="M105.114 13.5416V0.465129C105.114 0.320302 105.221 0.201544 105.353 0.201544H111.173C111.234 0.201544 111.294 0.227613 111.338 0.275406L116.109 6.73614C116.153 6.78393 116.213 6.81 116.274 6.81H116.609C116.74 6.81 116.847 6.69269 116.847 6.54641V2.14512C116.847 1.56147 117.007 1.09223 117.33 0.735956C117.653 0.379681 118.077 0.201544 118.605 0.201544H122.762C122.893 0.201544 123 0.318854 123 0.465129V13.543C123 13.6878 122.893 13.8066 122.762 13.8066H116.942C116.88 13.8066 116.82 13.7805 116.777 13.7327L111.988 7.21407C111.944 7.16627 111.884 7.14021 111.823 7.14021H111.507C111.376 7.14021 111.269 7.25752 111.269 7.40379V11.8833C111.269 12.4669 111.108 12.9362 110.785 13.2925C110.463 13.6487 110.039 13.8196 109.511 13.808H105.354C105.223 13.808 105.116 13.6907 105.116 13.5445L105.114 13.5416Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-xs leading-5 text-gray-300">
                Copyright © 2023 Summon, Inc.
                <br /> All rights reserved.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Resources
                  </h3>
                  <ul role="list" className="mt-2 ">
                    <li>
                      <button
                        disabled=""
                        className="cursor-not-allowed text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Docs
                      </button>
                    </li>
                    <li>
                      <button
                        disabled=""
                        className="cursor-not-allowed text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Media Kit
                      </button>
                    </li>
                    <li>
                      <button
                        disabled=""
                        className="cursor-not-allowed text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        Press
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-2">
                    <li>
                      <a
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        href="/terms"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        href="/privacy"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        href="/cookies"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Connect
                  </h3>
                  <ul role="list" className="mt-2">
                    <li>
                      <a
                        href="https://twitter.com/SummonHQ"
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@summonhq"
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        target="_blank"
                      >
                        Medium
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact@summon.xyz"
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                        target="_blank"
                      >
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>
  )
}

export default Privacy