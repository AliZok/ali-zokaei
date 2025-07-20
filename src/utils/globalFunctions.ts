import axios from "axios";
import { toGregorian, jalaaliToDateObject } from 'jalaali-js';
import { notify } from "./notify";
import { toJalaali } from 'jalaali-js';

interface ApiError extends Error {
    statusCode?: number;
}

// const navigate = useNavigate();

export const myFunctions = {

    starCharacters: (character: string | number): string => {
        if (typeof character === 'number') {
            return '*'.repeat(character.toString().length);
        }

        return '*'.repeat(character.length);
    },
    number3Digit: (inNumber: (string | number)) => {
        inNumber = typeof inNumber == 'number' ? inNumber : Number(inNumber)
        return inNumber.toLocaleString()
    },

    handleApiError: (error: unknown, fallbackMessage: string): ApiError => {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const errorMessage = error.response?.data?.message || fallbackMessage;

            const customError: ApiError = new Error(errorMessage);
            customError.statusCode = status;
            return customError;
        }

        if (error instanceof Error) {
            return error;
        }

        return new Error(fallbackMessage);
    },

    Logout: () => {
        localStorage.removeItem("token")
        // navigate("/login")
        localStorage.removeItem('refreshToken');
    },

    shamsiToGregurian: (persianDateTime: string) => {
        if (persianDateTime) {
            const [datePart, timePart] = persianDateTime.split(' ');
            const [year, month, day] = datePart.split('/').map(Number);
            const [hours, minutes] = timePart.split(':').map(Number);

            const approximateDate = new Date(
                toGregorian(year, month, day).gy,
                toGregorian(year, month, day).gm - 1,
                toGregorian(year, month, day).gd,
                hours,
                minutes
            ).toString()

            return approximateDate;
        }
    },

    shamsiToGregurian2: (persianDateTime: string) => {
        if (persianDateTime) {
            const [datePart, timePart] = persianDateTime.split(' ');
            const [year, month, day] = datePart.split('/').map(Number);
            const [hours, minutes] = timePart.split(':').map(Number);

            const approximateDate = new Date(
                toGregorian(year, month, day).gy,
                toGregorian(year, month, day).gm - 1,
                toGregorian(year, month, day).gd,
                hours,
                minutes
            ).toString()
            return approximateDate;
        }
    },

    gregurianToShamsi: (date) => {
        if (!date) return;

        const shamsiDate = toJalaali(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        );
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const formattedShamsiDateTime = `${shamsiDate.jy}/${shamsiDate.jm}/${shamsiDate.jd} ${hours}:${minutes}:${seconds}`;
        return formattedShamsiDateTime
    },

    async copyToClipboard(text: string): Promise<void> {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                notify.info('کپی شد!', 1100)
                return;
            }
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            textarea.style.top = '0';
            textarea.style.opacity = '0';

            document.body.appendChild(textarea);
            textarea.select();

            try {
                const successful = document.execCommand('copy');
                if (!successful) {
                    throw new Error('Failed to copy using execCommand');
                }
            } catch (err) {
                console.warn('Copy failed:', err);
                throw err;
            } finally {
                document.body.removeChild(textarea);
            }
        } catch (err) {
            console.error('Failed to copy text:', err);
            throw err;
        }
    },
    formatNumber(num, locale = 'en-US', options = {}) {
        if (typeof num === 'string') {
            num = parseFloat(num.replace(/[^\d.-]/g, ''));
        }

        if (isNaN(num)) return num;

        return num.toLocaleString(locale, {
            maximumFractionDigits: 20,
            ...options
        });
    },
    parseFormattedNumber: (formattedNumber: string): number => {
        if (typeof formattedNumber === 'number') return formattedNumber;
        return parseFloat(formattedNumber.replace(/,/g, ''));
    },


};
