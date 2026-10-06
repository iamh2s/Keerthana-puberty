"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  X,
  MapPin,
  UserRound,
  UsersRound,
  Navigation,
} from "lucide-react";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  // =========================================================
  // CONTACT DETAILS
  // =========================================================

  const dadNumber = "9876543210";
  const brotherNumber = "9123456789";

  // =========================================================
  // LOCATION
  // =========================================================

  const locationName =
    "Sri Sakthi Vinayagar Thirumana Mandapam";

  const DIRECTIONS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=Sri+Sakthi+Vinayagar+Thirumana+Mandapam,+Kumbakonam,+Tamil+Nadu";

  // =========================================================
  // PREVENT BACKGROUND SCROLL
  // =========================================================

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // =========================================================
  // CALL
  // =========================================================

  const callNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  // =========================================================
  // LOCATION
  // =========================================================

  const openLocation = () => {
    window.open(
      DIRECTIONS_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* =====================================================
          RESPONSIVE FLOATING CONTACT BUTTON
      ===================================================== */}

      <div
        className="
          fixed
          right-2
          sm:right-3
          md:right-5
          lg:right-6

          top-1/2
          -translate-y-1/2

          z-[9000]

          flex
          flex-col
          items-center
          gap-1
          sm:gap-1.5
        "
      >
        {/* =================================================
            CONTACT ICON
        ================================================= */}

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open contact details"
          className="
            group

            flex
            items-center
            justify-center

            h-11
            w-11

            xs:h-12
            xs:w-12

            sm:h-13
            sm:w-13

            md:h-14
            md:w-14

            lg:h-15
            lg:w-15

            rounded-full

            border
            border-[#d5a646]

            bg-[#fffaf0]

            text-[#8c1835]

            shadow-[0_4px_16px_rgba(90,20,30,0.18)]

            transition-all
            duration-300

            hover:scale-105
            hover:bg-[#8c1835]
            hover:text-white

            active:scale-95

            touch-manipulation
          "
        >
          <Phone
            className="
              h-[18px]
              w-[18px]

              sm:h-[19px]
              sm:w-[19px]

              md:h-[21px]
              md:w-[21px]

              lg:h-[22px]
              lg:w-[22px]

              transition-transform
              duration-300

              group-hover:rotate-6
            "
            strokeWidth={1.7}
          />
        </button>

        {/* =================================================
            LABEL
        ================================================= */}

        <span
          className="
            rounded-full

            border
            border-[#e2d0b4]

            bg-[#fffaf0]

            px-2
            py-[3px]

            sm:px-2.5
            sm:py-1

            text-[9px]
            sm:text-[10px]
            md:text-[11px]
            lg:text-[12px]

            font-medium

            whitespace-nowrap

            text-[#8c1835]

            shadow-sm
          "
        >
          தொடர்பு
        </span>
      </div>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            inset-0

            z-[9999]

            flex
            items-center
            justify-center

            bg-black/40

            px-3
            sm:px-4

            py-4
            sm:py-6

            backdrop-blur-[3px]

            overflow-y-auto
          "
          onClick={() => setOpen(false)}
        >
          {/* =================================================
              RESPONSIVE CARD
          ================================================= */}

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative

              w-full

              max-w-[350px]
              sm:max-w-[370px]
              md:max-w-[390px]

              max-h-[calc(100dvh-32px)]
              sm:max-h-[calc(100dvh-48px)]

              overflow-y-auto

              rounded-[22px]
              sm:rounded-[26px]
              md:rounded-[28px]

              border
              border-[#d5a646]

              bg-[#fffaf0]

              shadow-[0_25px_80px_rgba(80,20,30,0.30)]

              overscroll-contain
            "
          >
            {/* =================================================
                GOLD TOP LINE
            ================================================= */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-[#b8860b]
              "
            />

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close contact details"
              className="
                absolute

                right-3
                top-3

                sm:right-4
                sm:top-4

                z-10

                flex

                h-8
                w-8

                sm:h-9
                sm:w-9

                items-center
                justify-center

                rounded-full

                border
                border-[#d9c2a1]

                bg-[#fffaf0]

                text-[#8c1835]

                transition-all
                duration-200

                hover:bg-[#8c1835]
                hover:text-white

                active:scale-95

                touch-manipulation
              "
            >
              <X
                className="
                  h-4
                  w-4
                  sm:h-[18px]
                  sm:w-[18px]
                "
              />
            </button>

            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                px-5
                sm:px-6

                pb-4
                sm:pb-5

                pt-7
                sm:pt-8

                text-center
              "
            >
              {/* Ornament */}

              <div
                className="
                  mb-2
                  sm:mb-3

                  flex
                  items-center
                  justify-center
                  gap-2
                  sm:gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    sm:w-12

                    bg-[#d5a646]
                  "
                />

                <span
                  className="
                    text-lg
                    sm:text-xl

                    text-[#d5a646]
                  "
                >
                  ✦
                </span>

                <span
                  className="
                    h-px
                    w-8
                    sm:w-12

                    bg-[#d5a646]
                  "
                />
              </div>

              <p
                className="
                  mb-1

                  text-[9px]
                  sm:text-[10px]
                  md:text-[11px]

                  uppercase
                  tracking-[0.25em]
                  sm:tracking-[0.35em]

                  text-[#b8860b]
                "
              >
                Contact
              </p>

              <h2
                className="
                  text-xl
                  sm:text-2xl

                  font-semibold

                  text-[#8c1835]
                "
              >
                தொடர்பு கொள்ள
              </h2>

              <p
                className="
                  mt-1
                  sm:mt-2

                  text-xs
                  sm:text-sm

                  leading-5

                  text-[#8b7770]
                "
              >
                தொடர்பு மற்றும் திருமண இட விவரங்கள்
              </p>
            </div>

            {/* =================================================
                CONTACT ITEMS
            ================================================= */}

            <div
              className="
                space-y-2.5
                sm:space-y-3

                px-4
                sm:px-5

                pb-4
                sm:pb-6
              "
            >
              {/* =================================================
                  DAD
              ================================================= */}

              <div
                className="
                  rounded-xl
                  sm:rounded-2xl

                  border
                  border-[#eadbc8]

                  bg-white/70

                  p-3
                  sm:p-4
                "
              >
                <div className="flex items-center gap-2.5 sm:gap-3">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10

                      sm:h-12
                      sm:w-12

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#f8e5e9]

                      text-[#8c1835]
                    "
                  >
                    <UserRound
                      className="
                        h-[19px]
                        w-[19px]

                        sm:h-[22px]
                        sm:w-[22px]
                      "
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-semibold

                        text-[#6f152c]
                      "
                    >
                      அப்பா
                    </p>

                    <p
                      className="
                        mt-0.5

                        text-xs
                        sm:text-sm

                        tracking-wide

                        truncate

                        text-[#8b7770]
                      "
                    >
                      {dadNumber}
                    </p>
                  </div>

                  {/* Call */}

                  <button
                    type="button"
                    onClick={() => callNumber(dadNumber)}
                    aria-label="Call Dad"
                    className="
                      flex

                      h-9
                      w-9

                      sm:h-10
                      sm:w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#8c1835]

                      text-white

                      transition-all

                      hover:scale-105
                      hover:bg-[#701229]

                      active:scale-95

                      touch-manipulation
                    "
                  >
                    <Phone
                      className="
                        h-4
                        w-4

                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />
                  </button>
                </div>
              </div>

              {/* =================================================
                  BROTHER
              ================================================= */}

              <div
                className="
                  rounded-xl
                  sm:rounded-2xl

                  border
                  border-[#eadbc8]

                  bg-white/70

                  p-3
                  sm:p-4
                "
              >
                <div className="flex items-center gap-2.5 sm:gap-3">

                  {/* Icon */}

                  <div
                    className="
                      flex

                      h-10
                      w-10

                      sm:h-12
                      sm:w-12

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#f8e5e9]

                      text-[#8c1835]
                    "
                  >
                    <UsersRound
                      className="
                        h-[19px]
                        w-[19px]

                        sm:h-[22px]
                        sm:w-[22px]
                      "
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-semibold

                        text-[#6f152c]
                      "
                    >
                      சகோதரர்
                    </p>

                    <p
                      className="
                        mt-0.5

                        text-xs
                        sm:text-sm

                        tracking-wide

                        truncate

                        text-[#8b7770]
                      "
                    >
                      {brotherNumber}
                    </p>
                  </div>

                  {/* Call */}

                  <button
                    type="button"
                    onClick={() => callNumber(brotherNumber)}
                    aria-label="Call Brother"
                    className="
                      flex

                      h-9
                      w-9

                      sm:h-10
                      sm:w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#8c1835]

                      text-white

                      transition-all

                      hover:scale-105
                      hover:bg-[#701229]

                      active:scale-95

                      touch-manipulation
                    "
                  >
                    <Phone
                      className="
                        h-4
                        w-4

                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />
                  </button>
                </div>
              </div>

              {/* =================================================
                  LOCATION
              ================================================= */}

              <div
                className="
                  rounded-xl
                  sm:rounded-2xl

                  border
                  border-[#d5a646]

                  bg-[#fff8e7]

                  p-3
                  sm:p-4
                "
              >
                <div className="flex items-center gap-2.5 sm:gap-3">

                  {/* Icon */}

                  <div
                    className="
                      flex

                      h-10
                      w-10

                      sm:h-12
                      sm:w-12

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#f4dfae]

                      text-[#9b6b00]
                    "
                  >
                    <MapPin
                      className="
                        h-[19px]
                        w-[19px]

                        sm:h-[22px]
                        sm:w-[22px]
                      "
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Details */}

                  <div className="min-w-0 flex-1">
                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-semibold

                        text-[#765400]
                      "
                    >
                      திருமண இடம்
                    </p>

                    <p
                      className="
                        mt-0.5

                        text-xs
                        sm:text-sm

                        leading-5

                        text-[#8b7770]

                        line-clamp-2
                      "
                    >
                      {locationName}
                    </p>
                  </div>

                  {/* Location */}

                  <button
                    type="button"
                    onClick={openLocation}
                    aria-label="Open wedding location"
                    className="
                      flex

                      h-9
                      w-9

                      sm:h-10
                      sm:w-10

                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      bg-[#b8860b]

                      text-white

                      transition-all

                      hover:scale-105
                      hover:bg-[#946d08]

                      active:scale-95

                      touch-manipulation
                    "
                  >
                    <Navigation
                      className="
                        h-4
                        w-4

                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM DECORATION
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                sm:gap-3

                pb-4
                sm:pb-5
              "
            >
              <span
                className="
                  h-px
                  w-10
                  sm:w-16

                  bg-[#d5a646]
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm

                  text-[#d5a646]
                "
              >
                ❈
              </span>

              <span
                className="
                  h-px
                  w-10
                  sm:w-16

                  bg-[#d5a646]
                "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}