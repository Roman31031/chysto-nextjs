// Автоматично перенесено з прототипу — дані послуг, статей, FAQ, кольорів
import { Sparkles, Wind, Building2, Home as HomeIcon, Sofa } from "lucide-react";

export const display = { fontFamily: "'Fraunces', serif" };
export const body = { fontFamily: "'Manrope', sans-serif" };
export const mono = { fontFamily: "'IBM Plex Mono', monospace" };

export const COIL_TILE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAACJCAYAAAArHwTAAAEAAElEQVR42lz9Z7hlR3YdCK61I8657nmTL71DAkh4jyoUyntHsuhE0QwpSqQkkhIlTVPSSGy1Rr5H+kbfqJv69KnVonxTJCUWTamKLEtWoVBAwQMJl4lMpH2Zz793/TknYu/5EecmauYXTL5899w4EbH3Xnvttfh3v/5VgISpwBjBCFAMYoYAwgkAOhCGCEBMQBqUAGGAEWYExWAiMBNQCMJgIEACaoAYCAFNAToKgkUljCQiTARQEYCAQuBMYSBIgZqCVAgAMSDCICACDDSBwQACLgaYGgwGB0KhoLF+1vRMUMCooAEGAAKoAhQABqgSAn3nsQFEA8QBNAc1A+vvg3oNVAk6giRg6XsCCiWB+hlJg1GgIKgAAaiktU7fIQD0MPLmOqkJ4AFGhdHgbv45BRoUIJQGMwIAvKWfM5A0mBkAJ4SZKQwOAOEQofCmqAwg63cIwsFgagANZgoRwgwwrdcjWv2uASqgYhACFgGT9E5UASfpHVAJlbTmBEBxMK0/E4CZAhAoCUeFQdKaE6AaVAgxRSQhMNB5mAogMe0vE5BArN+fuAxGwJD+hxkgIGAKU4U4n/YU0vOZAmDaClSFkKAQRgEtPX8UwEFdMESX3iYMCqohkiAUooCSYIz1plKYpU8CCTWtv5OmMwQFNL0zI4C0DIAIFA7OKhjSWQCAaISj1T9LOI3wklYUJgYzpM0ngJhHBoUyLSQAOHPp50RAI6x+CCFgFBgdSEBE6p8HTDRdDHTwKlBGwBHQHM6pGGBwBhoB8UCMIgJNJyl9sAhhEIgRZITAAWbwTJeGWjqFDgKlgdB6gzvQ0gtJu1iA+nlgqA+MQgRQKlyU+rOA9NsMhvpwETBY+l0CCAk1pAMFwpi+g8KBYgAlbZrJTkxbN11qLh1wlz69vgCyye0hJA10JlTABHQOoEFM0qGiKeihABxBMzM1wIwwqCMYDQTE6MjJ/gTpACoEAtN0KOTm4Tc4A6Krd7Jl6enMAOegSJc5kL4SvUH05saAB9K6AvX3kbRONrnkBDCmQ0sCNBAepoCIASogBWS6fCg+XXYAHAATB8JNNlW9Ty1tZDGQhEo6cGAGoUFp9WuT9GcisKhM28oZGIWkAoCJQESglnYLxEFoaW8YoihAIcQMyvQ+XPqLUIkwAJ4OkekCM6aLgUhrDKaLy6khUiCiUHMQhnqvpjUTRgA5jCGtiSh8fQ6cEREKEw9v5uoIS0R6wCsAhwCDg6TbgemmNk6iCr9nE6cNDpN0ucOBtLTmojBzN28OdUAIIgjqRFhldBaFRqa/CwiiiJoaVOodIAaLBmcqTBFdXXoXUFWwviSggMKQ9roHoKACTlKEYf2yjfW9aYC59OJFDKIecAYFoHCQ+qWI1DedSbqgAAjTbe+QFh/OIBCADg6Ti6qOvnSgJ2iGkK6WOpNINz+RLkpaisgwVYpArc4RzFKGEQFmAlUl1GgUFQcEpTkSDTEQgFFjUIiqmUERgIxARQi9h8VIOKpEijqmp4EaHA0UwKnBHNLBUgBOAEubEWL1PaQwFVDiJE6Dlg6u1IcNRggVrIMCYsqeDCmNMU2XvklaK/pJhkOoOZiz+uIUGAkxwjkgWL0HkQ6/sD50ypt7weqQgqhm9aF06eIWeqcZ4NRJpHmNalSAEqPSZWg4M4sRwQwBADQ6A6KqMvO5mWq6m0gYFaKTCA1AIrwZYvpQkArc3G8CIKQ1TuEIjgbQpwvI6vWhwZyCSogDVNNfcJr2h8AjqsKTAlFLkcNwc1OhjiC0lCarCejqqIPJz6HOMxwoCkuflF6KI0jP3NEazsGcoClNOGdKhUZEWBVsUIz9sCwk0FHyluaZY9u74Og0FwM0IoSA6DMdVw4hBoRYIarCUVI0i0Ak4QlEl9J5Y9p8SoDmgfpWpE1eNgGpo49NAiIhFtONCQJeQXXpFgfq9GVySNMl4CYbsY6G6Ze5dHFYHU01rRklZQh1wE0voo7+KT0FNKaA5NLLIxysmXnQZ5j2TZgFK6NZMIPF2BhrxaAhH8YoLd8caKiQUapmMwfpIGKVwtAvKktPGwERTZeKAMr07upnoHsndbN6fU1TgoiIdElLylRgvt4nAq03MZiinynrFJiwWKe6Uu8NTREJTKmuU0LrQBGpcJbKFoN75yIgES1FJiFShkAPiKb0OEtrHYOCjo7CmMEhyxxmGjnoPGJUHVUlBqMhBqMi18pyVWsNQnCBTm/dt2/oicpco8h8RAZB5lxUROyOStNU4NyMfA4CeIIhPZTAUllXr4OaryNuyswIB1hIPycyyYOgVMA0ZWOW8jDSpxIlS7Va+i2pzPAO8FK/oEl9IkxvjfXGh9YpT51rEylVdKl0SdlnfcgLM+Ti0Mwb1mg4NPLcVne7eH11s31lq3e75Pmnrl9dvX9jr3/3eFguw7umNBsN53zhsixoVbQgUMKgo2KUCXen2+3+wfmp51ZmOs/devLolw/OzZ4z7zAaDhCDoQolQRpBGHHzUNEAOAfTCAoBc5PEt47kmhaJdSrGVOtCBNR0KcFc2sCTlMFSWqaaalYab6aHDoCKQx1w63SwzgYoUAvp5Zq8E2XxTs3oIChJdJxA8gyNzKMfNeuVYfrCVv/0mXMX31M1mu/r9YZ37pXhwKg79kp63/BwPg/0DloMg7fojBQJYaedy87C1NQzJw8sf+WWg4tP5c38+vRUuwcDiqpEVVVQS1UXJaXLKXJM6viU6qeaNh3OyfcVqTecpr0icJOctl4XBZ2DxnQZpPyiLiNqDAGW3pkJb8ZJUiZBqs7U0uFXosY70iGhpTrS6jpOFAgAvHdo5I3YajVQVopLGxvTf3Jt/aEbW7sfvtYvf7gyOagiHYtG+kzgHX2W0wm1+42nJc+8Zp49iVGnmu3ri9PtPzl1YPl/HJxuvXxgabnKWu0bKg5FCFALCCHexEfMEdBJiWXwUETU5UGNl6hzdWEb3skaNAUKq6Nu2h911qZMtXd9WakZIB78h098KxXKMkEzakBFmRbwZp5r6cEodV5aRximktU5j6mZeYh3uLSx1nrp8sZdzzz1/D/t9vr3dJb2Tc8uzDWKhZVoktnU7ILOzC+YzygijEUspOyPgalpl4UKpESY+n53YIPenuytrWmxuSVT1U6v6bh5/Nixbzx21y3//NDi/Pksz4rhcIiyjMg0JlAIqBGnlGqmFDdFNpl8eQhMYg0sINWnWl/19VecgE0mmmo2qxdwUiPjHZBJEkBQVzR6889R112mAD3Ti5ygYmI1yEMIiFajhSGdXFxfO/zauct/7eLVtR/pjsrFfGqqMbswL4N2G/Nz87q8vGzTs7M2O9MA8wze0areyHrwzgAdjivb2+txsLPDor/nxnu7Nt7cGjb623sznanX7jl98n+/+9jK80uzU9eqMmJclogw+kkRZClzMDjQYh3xEnCV6jarMy9Jh13qBFUJSkS0VBiKsM5W6oNJQY1npgg+2Wv1epoRKpo2br3WrMG3lAW6GlC0d9JVA0RTttfsTCMYcOXG2uIzb138U6+fe/tvVb61OLv/QD4zNev1wCHMLc7ryvSUNrJMOwxsZLkaab3hgPS5H5aVlsOC3VFhOxvrNuztZf3uNmxnfRiu35Dp6fzKvXfe9euP3Hbi15fm5jYghsFohBgBX0fcyQGrr+0EjoGgxjpDtZtZFq0GADHBl1L2kVbfwVRv1sDBAM963/3DJ75d5+ICxHT7iqRaLxU79YtiCtci7yC5BOCcg6fDIFTu/NrGXd965rW/uz4In+R0q73/xC168vTt1dH9+zDXZChVbHmmaU0xbQNuQcCF3EuHEgtCNoNkJlATWKHAXiiZiejusODl3a5dvb4qVy5dsd3rG76706vc3mZ57MiB3/jc+9/9d6Zbjc1iPEobjkAI9eEVAREBOBCxfm5BtHqDfE9VlNAmrVH0hEgHR4jinZQQCmFKxWvsKF0GwvqwS8JhTCFGaF0b1nAnIJbQT60PiAgciEGs5r/4wps/e/nClV+Bz/Y1jx3D0VO3WWt6Tmc7DTs019ETsy050mlY26Unb0ORpXjICgh9hWdUG1F0QxE3RlU21BB2dke40d3G+pVLsnPlsg03t3M1t9vJs69/6J7bf/XYwcVzrCppZKJFWVfG9fOq6s2sQzQi1lGZqNF9ClLdVwNv0IRyEynFrg+v1SCYs7rYEoWqJIBOBM7q+hUxHfCUlNSfm9YJknAMoUv/31Iw8S6HQuXVte17nnjmlX9ZNdoPZPuWG4dOnrLDK0thfroDCyVvW5jHStOxmQlopqWpE3F0CjUxGxZ0OdWYiVaCOFRgp4JubPe4vr7h1rYu8dKZc7KxesNrwHiuIWcev+/0X3rwtluei9GihqIOEOmSi5rwIauxDKnR7VRxTQ6s1qVZyh6o7xzeSUck3Ys1Su9SEOHff+JbEwS7rl3qcCMuIXyoc3cQLiiMKqTTaOq8b8SpqVl8/ezbH/r6t17+jZlTx5qHjx6Z2nfgkC3PdjjTaSMzYqkterzpebvT2PDmPDwjIs0YI5BBtYoQ+lTwuZZIjKYMECsJV6jZbqVW5S6sVnAvbg1wYavH1SsXuXnu9Wp07Vq51Jz57z/8kYf/dqvhVkM0COm8Y6RKAqGiwiHVWCaTvHgC+hqCTVpQuJlVpMiYIorW8P7NaKt1fpaaM4A6VDWaCqYape5HpEhhirYp6ARqdMH5uDQ7i9cvnb/rt775yhcG2fz+dhM8fMe9jYMri7Z/ecGOz3Q47WGzbcFhmiwLVQ3MCGuaiic0gCJQVOY0pLAFEUEE0DPoyNSVoPZKuB2gvFgGeXN3wDfPXcb2229HWb9enD64+KUDt972l2+flfWiXyHGAEeAzmBxcrUB3kK6oGzSCpwUH4qgRGYGo0uXm6XLXuoyxCb1fv27UKd+xKQPR0Sxunz5HiTeUN+QDk1Xo8b1756ZnkNwxB8+c+b/8dSZS7/q5vf5uePHmkePHsT84gJOzDbt1oW2LWcqB4RhDrSY4DbkMFTvABeqBk2tSrp0pFjfu2QFw24ZsZ77ai0gO79X6JlL13H2zGvYfP2VmA37N9736APv+ui77rux193DYG+EZtPXbSibwCfwMJgGmHNANJglcA+T7s2kdKjzGad1j6C+DF19oNUI/r0nvl1D9AnmNk2pL5GiSirjUnrHqoI0c1CZtdqtan0w7vzuc6/860s3Bj957K7TOH377TiwNB+WpzM73BTOU7jsjS1xyFBh2lwcKhigEs2qGuHJBIgNGsTB0RCE4kggszqrokgJ00GMFihhDHEXIvRcqfLqetfOvXXJrb1+BoPzr/Yeuu3oP/rcBx77f1elalWVcJIl5NQspX022YaWeo40xDqiokaPzeLNEoGoN5ir+26REEZwgg/X4I04QpkhmqSe5KTwqTctoWxCTeGxsriEsVnr//wf3/g/Xr1w/acWbr8LH/noo0Hylju1OIuVBnU/zaY0uKYXI6ENmOwThzGIBiAWVQNphZnLHS0ajNEotLokNzNzLtbnoLCIfmWhcGJdJd8KZi/vDfHCuVWun3nTZ9vXtpbmGq89ftepHzu5snBjb28EYQ1kTJIFhLoPjtTj9JoOUkgIvWjquYsknCRlg1r3Xuu2nqYetTkFotS1K+ooLXVsiqA4xPqVKAykoUUHR4Iu852ZTji/ubf021/82h+theaDp9/9SLz7ztvcgYVp3dd2WMwdphitQ8isODqoOjhaRICp96CJmM2IiAGo1EzUkDFV6JXV3VehVQZpiOqY1DHIcSSvAdW5ADmzscdvf/lJv/vq89XSXOfyD73noY8d2b9wcac7BGKJXFzNE7A643MQq6CRoDOoTlqhCQcIlg54zRCouQBSg8e8yS3gP3jyiZu3niKBNVLXcTLpzTFtzszoJM/jzOwUnn75rXv+4LW3v9o+cnTfY/feZQ/cst/25Q6HaMxFYz+BZDKKwG4VEMuoF3bGUAbOtnMcbLbiciOTfc7JjFj0NBlBIKrMUjVvFDGfSiWLSo5ctBCNBLUA0IOzHSMvjavqhfVd//KbF8u3n36iORV7X/tzH/vIz6wszd8YlmNoZTdRT0OcnMZEOpGYCBQ3b790iU3izCSdntS3aZfppFmZ7mZL/b5KMkAJ86z5GfXfTZ1VaQo1n57Dheurp/7z73/l2+PZQ/se/fTH9UfuPIR9FrRsN30T0WaMqmquUtVuEeTy7ghb48JUPEch2PHZlj0yP82DeYLihNRgJjGaCRUZRVMr25xwUurTAkxKjdqFcBRNd8xw1USfurZtT730vOxdWY++tzv44Xc/8PP3HNz3+d0qoBwPE+HGkFoqnJRRVrew6sSirvFTZzCldYmIkBIYBevSweoerkBME1oqNUmCLt0TnBB30gGehHyvJr7V1MbMPL7x3Rc++rXnzvzu4i33d257/D597NhyJOEPNhz3e8ZRDE7pkBsxtKjXdksONVisjHPthi42vB7Mhfs9ZZq0KmXjpEIyo5IpcQkKBhiDmTV9+spjQksltyP0ugnPjMvw5PlL/tJzb1r30mvVB+89/Vffe+et/6Y7HECrig5ilESQiWqgEyBWiViBRHBB3Wq1Gny7mVJr3RIzhXhXryfBf/TkkzfBAa3RO5G0gOnirHu2IKTRQp55/NYXvvyfX+z3fuLRT/4gHztxoLx1tp3d7dQGFO4GtSujipUijs3c9mgc317b47XNLTSnpmwqa+PQTMsdmmvqbVMNHm7k8ZAnG4ANhQ4R8HUGYJMGZ91rA2AVzXx6VhuauaCsxkIZhmirldkXL27YH3/5K1m1ubrx0x957NPHl1eeL6sxTCN8XQUY6xSwpq2kQ12ztswmYN/3ACgpgpKSUh/e7BRCjZCaFKDOpUZ/TD2+CRtBYGxkzlozC/jWMy/+6B8+//p/XHn4UffZDz+OWzPD6YZIoOqUp7teKHvqsDka69sbu3J2ddO2hoWNoiL3Thq+YccPzsp7DyzjwfmGzopjsyaADVQpMHiDUKgORtLB1AykNTRK6VRLEw7VdKiRpULXxfPV3cpuDHbtK19/AauvP8eHTxx+6vs/+PhnNZTdcjwCoMiY6tC6+3szDbS6zytMLDPS6o1noLq6VJkQaSb12zsHfXJfGvxNZhKQ+us2YZ0pYFkTU41G+7e+/uTnX9nufvzonQ/gA4/dF3/kwBSWJbjzlUBjxOqwxG5pOoDJ6u4A17e7dun6DetMTyHPOjg41+Edix1978q03NJoaAuQHBr7oORQoxmNhNTdCgBOo5pzQEVTMyHMZATaIFrcU9qVENxOMa7+8zdftjPf/oa/Z//SH//kZz76A6PBcDgcD9DwHjljgpEQE+xRs79wE9H3NeurDg4TIAuTbonU2IKC//ip79SLBkTnQGONwtYMEAMogk6jjauD6sTvfvH3v77eXjry4Y99NP746cNupkk36xgFwiuF2osbA17c2LExaIMy8ML1dfZ6Q9u/PM8PnD5mpxemcCzPMUVgzolMQ9U5gVhkAULrHJ2mUUgxMzORqFQRhYsGKw1GWPQiLtJ0rEChCsl8fL40Pn9pQ//wiWfc9vkz1Q89dP8P3nPqyJdDiGCs0paLmm63d0ImVC31HBPxDjHWbYl6cWzCbZH6vy2xp4AETFEFmrkaPZxQAAFEYKrdRIOu+X9+86nPv3Fj8PETjzxU/Mhj97uHp51DLGwgHr0AFuMCO6VxbXeE6709u7o9cLv9gU1NT3F5qhNO7ZuRIwsdHm5ldjhzOiPOQ1VbXpgBFixR8WpSpRAmamoUb0rVzIBU/qtFUhXEKKoMYdiLpjsuswujgN986mV78yvf8Mt5ce3nPvfZjzSce6ssS+Q0aKqyUqewBufqlCSlcHUU1vrfURNZElki9WITxFATeJDojgoiyjtg6ARlTmQpIms18fZmdeTpV5779uUyP3LoznuKn3nstLtn3nM5GrZCtLfHkBu9oawOxygK0+5wJOc3drU/Hsj+6Tb2H1yJ9x1c4vF2hhmjLWci+4TWdGRmat2EWApEgIiEVRtBRyXMNWqehWoMlvIZC6AMDLoZDeYlXhpH+a2Xz9off+Gr2XKOG7/0A596wLS/1hsFzIghasAERjZhCpCmCGbITBJFdLJmEzIPEoFFnCS6Lgj+46efqnt3RISv+3msubqJ1tWZnsVqf3DiP3792XPF/Ir7mc99pHz/Qu73RQg84Gjxzd2xPbU9xM6wRBkC9kbB9bp9qzRiZarNx04dtEcWpnAsc9U4qp+CYCYxPiTCTGEaJSGkHoAGi/CUun5UM3NjmMaU90mIUDoRr2qWMnnAMYzB7EKw+N3tPfmjP37BnX3yq93ve997f+D2o0f+eBYlwk3GXaxv9wSu1I24m+mx1XUwa1pdIhb4hKVaqjmkZguZJX5u6RrvsKHMIN6j4xu4sb0x8y/+4+fPNO5975HT736w+jP3HLDjGR1itL0IN4qKblBd6xW4tLmHSztdLszNMVrETn+AKSe8dXHWPn7yIE/mtJmE12hFiKPBpyzCxpYoHkKYghTVlCCQUWFiNRNASanhYYsWrQCkMA03LPMDml6IxFdeektfeuJJ1xrtnP2Rj3zos/syf0FQQk0n8BKgVlMhWZNQ6vLCCLMIqet8myyt8iZAhQmppY44JFEl8mhiQE2qFSHanRk0YDP/5pnXrmywM/PQ/ffoj9+5YrdZcKTpDRO+PRhWq90q2xyOMRgrzq+ucWO7h6npti5OtXHfrYfwiX0zOJE7TsOMmkDFCDWpqetjEYqZJZbVhNquJJ1FRM3pPAhzAKOaxjrARYONQR2KOIVx3ai/eX4Vv/9bX3Ac7F78S9/3kU96wZtNmtiEY24pQFiN3htjnXFYzStQmEn6OZHE7qyBYnOA+9jP/fn0JHWfDEAizEOQi0N7dhYvnz33sf/8n37rKbv7Yf9XfvTj4cMd5/dBJHjY5mDM76zt8tmtPkaDwuU+w6goeX1zB6NxYXOtJh89dRgfXpmxKcBymssg1hLCwUQM5sTEKRn5Pa+sZjeIUKAJI4/1dSgqiS4NJnYljTSzCiGRaJyLS+2MjZVlbI7YeuJr3/zBQ0eP/fbJhc5OFUJqNYjc7KOlFCRtGid1uUDWzKJECJ4wrCa86VSGTfisdSEpUifGhDcw9x5vr11f/tef/8rbnZOn9933vsfGf/O+IzzqzI3V2A+qEOo4kNf6fRtF2E5v5CxrxHa7yaLfE600Hl+Y5mdO7OephsM0oXmqanwGMw9KzVakpMtEJ+0YIa3OrmiSiIbvVFLGCnBCpxkpGZ2P3uhEojfDwaU5aS/vx43t3cVr11bfvzg3/+/mO15NE3BnxvS9reZe15jIpMEGSRRETvq0/z+MM6n5vCn9k5p4AMhN6iRJiBfMTE2jNxjO/tpv/LdL4fYH2h985H79uWMzPOHNBWrYM+WzWwPdHg55faCy3S9sWBS21x/J9HQbh5YX7eT+Odw+P82DXqyVHiYl5QRFhTWAzgyEF5onJOWeqdPiTOFFRFM/lQpanUPTgeoI742uKxEDRchF7JaFaTd/4FB55sra0ouvnv/M/Xfc8tt5DF3xE14E6/2jN5lhqQsmCbmHwomvy7E05PLOJQe4j/75n68J8UAE4ZmmewyGrN3Onn3z4t/77S989d/c9+kfwA998D36/dOeU0DcYsW17gBfW9uziyMT56FNg/SGI1zZ2OGoqLgyPydHl2dxfLplp2abXASkLUQrkTYkZyLNMTUAU/sh0eBSImqGHISI0DEtqJAUMaWiTrQMNGgG80Etlqk0sRYdF5oNtg4uh0vrW9mzTzz1Y3eePvE/9s/NbFUxpvZOmhaoOb5pEir1aetBi7o3mW5E1mMHqXQgE3URIrD6L5tkN4kB0+02trd3jv7L//qHz2Dl4PLP/eSfxk/fNqu3iPmhCYMWVhrQiyLXBmNe2utjt1+K+FxHZeXeun6dWxvbOHpgiZ8+dZDHOw3OpCSEeeJiISPgYCZMcwkudaskpxMHUyElh5izmt3LhBW4xCUREFQzxJgOj3cIjsKWozWdM860pXKZXrl8Zfn8a289eO8th3/T+wnlfTKAUQMqdUk1ATP9pAqZcMltkotM0M8USdyk9QimkkMAcQ5KwczMLF+/uvrIv/u/fu9V55emPvyZD4VfPjTlDjDaNiKvFNH9wdU97gaIloFX1/dsOCqJPMfsTMtmplo4uDgl7zqwYPvyTNpQzjrBNCiephkhPj2RCgmaSZS6iyNKwDGHWS5CB7FIsKqpY2ZARgEZXYQzAsyISKoENWQUbc9Nic3OlZdurM2+9PwbH7vt2MpvzrXy8U0GHy21F1kPTUymkgT1RVZjJDU7jGL1lBThPvgXfvEmHS0HkWWpob1/36H2f/nad778pefO/vh7//SPyj99/912z1yD0dG9FaK8vFvIW92hdVoNNoQY9gte3hzoC+evI2u1cfTkQahG/fCJFfv+5Sk7STUnzjo0Ngh4GgWIlcBH1VjSmNFEYGylbwBPsyEhBagDwhoEMpANUFpCtoSaiVBEZBumKjk9BY7OOTV2THG602Z/YYVvjKrWxctXfuruw0f+dRQURp+iJwmKS0W/GlQcTBPDSWtKogGINf0uMG0qtdTbjsrUFzaCsWJO4XRnGpubew/9y68/853RvqNLf/vnfxh/Yf+UDSWT1yuTi6PAt4cVNwu4a8ORvXp1w93YHWOnO7QyVG6nV0g/BBam9n976DQ/NNPCAqJldKxHNqg16TKQEhkBQiuojJBqzEhKNMY+lV0R9gku1/HF11sjA6tI54JTdqnM4AnSNUCZBmTFC+ZmF/1LvdJfubFxuAzloRNLc18MdcRNAxACgYPWPG2t6QaKCRMtMcvMXL1J03pqmuNEYOpXJSTaiXceIhmM2nhro/s3fvuPn/kPrTsfbH72xz+jP3lkxouIXA6Qt8bBzm0OlGoYDUd48fyq7Q0D1vZ60u0XfOvGDVahwvtPHOaDMw3e5zUse485UlwNVxAMMSUMLtA0lzQrFkkxIx3MSgorUPoECWqlKmOSswSmAGRwRoJjmpXmGCguMxenTGVODHcvz/vXqkzOXbw4s7q9+2OP33PXr+0MRgg1E89MElW2DgqmQISkP69ZUwpFIGHm6n8S7qN/4S+mKJcGBhHUYWlpufHvvvzVr33ntbff/Ykf/AH5m+86VTWdiInKlUr1UrfgencI5x1bLuNeBVxc35GNQQE1ahSTvf4gfO7uE/zAfIeLApQwOJoJYCXAChYjRIKRYwMKCJx46ULsAoi3lXgz0L7br/it7aE8vdWXJ/YqPt0t9Jm9Ac6XpdJlaIswJ2SWgmFU2TOzCrTJLGkkZHF+SsbS4s6oaLx24e33vfuOW/9DORqbq1kprBdNJ4WVxJQC16hnStGZ5kEt1cSTlgVpCAY4l66/RnsWG9vdu//lF77yNTt12/Qv/cin8OPLHbdRql1XyNVBFbfHFcYhWoTyymYfr13eQKPRYKfd0O5wZG9dXWenkdkvPnYvP7k8rVMIk+SRHtCU7FsUGMuoLACLdEIIIp2NIdhQw6Vg7u0CfGMU8VqvwIujYK+WaucCeLEq4xCQORFMUzgrDnvBuFNFVTNGL9EbOZ9T3PIyLu8M8rW1jQeyXF65Zf/SG6EIdZMd3zM9VBN5YHXpkFpiWncnRKSemjHc5LkklG8yeWZmDlkzb5xd3frlL7341v9z7uTp5iff/0D1meUpTmdONtXild5Qru4NdKs3sKIMttEd4sbeCPuXlliWha1t77HZbukPPHInPrt/BsfJlBWDUsHChEeX1czgKmGIGMNJBdgYwNBo60qsVoYzRcXXB6V9Z6+QlwcVXisjXx+VerEyi+Jcx5FTEOtDuVtFHVFkBKE3ZZMiMyuLOF/GfHu7O7O2tdZ88Pihr4+LABFDVKtnxgDnrN5rdnMwAXViT0tpKmvcwNflSEpRgmFxeQnfev3Vz71w5uyD7/v4Z/GzD5/UjoorGGxIj9WylMu7AwsGdry3jcEI52/s4uLqjh49chDHD+T+xqCrH7zlkPtTKx2dquOawaEww5YqBnQYqUqAoh+93QjB1orAVdCub+1yo1foje09DIcDK4ZDSEXzzVwbDc8QKzaaLa3MLFaFrbRyd8/B/fHug/v5oQWvSzB3ZRx0y2gzuUPToh4T4ftPHdJbVxbiv/udP3jft948/z89duzgPwtlNSE7gvVBrcek01CCpBtPOJlDrYfL4eoerdX1rIGkdBpN3R2N53/9a9/6A1u5Ze6XPvshfGY6d5uV2UApY1Fc6fbdMEQ0nbNRFW11ryshRuwNRtrvDXH+8lU/u29BP3f/aX5037QuQJ3Ao0RUAuxDJUB0W+n2oDamw3o0vL02wg2qXd3uYmtQ2qio0B8NUY1LahngvcTZuRkfY9SphrPFqSk2xWyh4eRAoxmPzU/hgZncH87EXS409otKPMXmSf3IdAObjz0Yv/ongd985ey/vePA0tPz7c713rB/s6yw70FKXY0HuHpyx9fTWqxnV1nP5qY0MAExjoKoRNb2eOHc2T/1xNnNvz976GT2oYfusI8sT/lpJ6WauivD0r3dG+tOt2SlxCgEd317NwqAQX+MMoqMNOj333Or/fTheVuGugBBBNWlDqcPRqyp2bAKKESwKQ5XR2bbsbRza9u8vjfW3rjCYDw0hiBVSKSE6WgsNaLd6SDLnAyKsalG7G+19H23HuePHZ6yqVzYqxT9EGXkXGhZ4GER+9RDd8VLh47YN770hV85vnD5yTsOrHyxCgLPcHM835BGIVPdmkgsogkNM1VIPRRDOvCfPPsi4AAvxP7l/Tizev3eX/+dL3/jyEMPTv30x97vH2gxlhB3bVSga5Eb/ZJnr6xhfn7OhkXFtzf29PXzV0mX2YkTh21tu49P3H+EP3Ni2U7QnJExQUHRXo/QXgD7MbILwU4Ez2/345urG3jr/HkMeqUr9kZGjSKZqNCsAcBR6FtNtDNhpQaXZ9aYmTVznmrByrJg5pzdd/yw/sRdx+Vkk7xeBl0vTeYaElvOyTAoVkO0PzpzPj771HftZx+/774pkbNpAL5mqmhqdUxYeFL3JEPd2qDkN5G9SeGroIkzEOIXZ+fkX/7BV7+0oa0P/PCPf1/4wHyrsaLR1iEoqornx8Gu7vUxKCtYBVze7bI3KG1UlLbXH7AYjc25TH7g/ffZTx5bxB2e8IwomamY4nJQ14VZVMeLRlwpFW+udfHS2bdx5fxZOHZMY2ViQeB8bDvnBAotC+u0p2xxYRYqtLIspYoWYUrXbKLRbDD3oh+67aj80Ml9WCZ4vVK9EiJLNVtq5HKxVDz51oXw+S98263I7qu//IOfePewPxqGGBPSWU+10GLdDprMG9dtyci6dr3ZPXpnBIiGzHls7fawUVa3PvHCG991B09Of/Dxh937Vzrlvk7mB5XY5ngo37mygc3uSF2EG9OwsTuIOztdukbOcaEcmsPpQ4v4K++9zd6bAcN6uiOD6qqC60Xg2rDEFp3tOsfru8P44vmrvHrlmpVbfZZVQZcaZopomG5kJs6LeM9mOwMq1UpVpNHC0vISWu2GDcoRtrZ2+NCpo/bpu0/hkZbDEGpXCzUBMJt7d75fxZmmhX/xxBmc/caXh3/p+z9ySsBt1COfEKZxRijU1ey9msQT1eBdSpUFaYTVfeQv/gKEQMN5nNvYXfgPn//iH82cvG3l+z7yGN490wIBtzmq9NWNPndGBVZ7fe7ujSxUJa5v93h5fZelRds3N8Orm3t6360H+XN3HJbDVDPhTZWWbQXe6AVeKStcHau9sTfiU+dW+e1nXrbr586B3R3aCMytoreKWQxRipGL4xJVHLMaDjje27E4GHLU20X3xroVO5tOq9JymCBUuLh6w7791jVm+5Zxx0zTVCAbozFVHea9YCpz0FYTz1/d8Htrmw/dcXDp11Of22pwpabzpVmz7xmIT/ghKLXoAOrpIkJojGoIyvwLTzzz8Te747/6wY992H/i0JyfY0RXjcNRwZLO1qsKg0px+fqWXd/uc3NvyMGwIOkYQjQNpX7m/Q/xk0eWcTrXKBQ3AlkRGCqxDcG1YPLiKOpL61376pOv8dnvfBe7F89ZY9C3qVbLXDWiVZXmVUWUY1o5hkCtHPS5ff16HOzuyqgYqoVoGtQRVDIyqPHZ19+wF7f7ks/P45ZWrs1MOFI4E8GCmLU7Hdsm7dXX31rZPz/7wqmV5TeGo4ITIjyZBuM5QUlvkmgS5THh2SlrgU76koAXh0bD4+z2aP9zZ974qhw4sf9Dj95bfeL4gj+R0akQe+OKz13f4atXb8CB9M7pRr/A5dUbhHMyLAqdnZ7h7NwMf/7x2/XRhmAESKQwgqEXTV4flHZeI3Z8blvm8PJb1/nkUy/YtZdfEd3aVBFjQyMFqrkaJJZOx0PROFZohdFOT6ui76wqYxiPuHH1Crc2NsAQMTfboUS1MxdXuZ553jY9rQcawp2oyEhdzIU0YGXfHJ+8cC1bv75270OnTv5GiCFh/KZwfjKbW4s+1NmwTKiOTtJorVO4D//FX0DDt4AQZ//d57/4vB07dfIzn/5o/PTyTDajynPjoBd2Bn67KK1fVrK500PuHYtIrA3G3NnpWaPRQKgCH7zvVvvL9xyVRQEUwkaacZerEXylW9o1GNYC4osXb/BPnngWl868ptbdcQ0xyei0KseI5UCsHKEado1aUUJJK0dq4z6q8dhCVRqqkhYqalVpNejLeDC0cjTC/MwsiqrEd1+/IGsQnN6/zE7muFkUWiqk7Ricc26YN+3JF147fGC29YcLnfbqhIeRwmxCPm+S42sUWSxJhohMVBkmo1jOeSf29urVu77w7ee/dNf7PtT+7EO32a3OWEVgEI3eEb2q4pVBaatrOxxUFYoqShWBqiwxLAobj0t++N332y/ctuxuz2AqTvoARzAdmGADcE8OKr6w2benX7vCr3/lW7Jx4ay1WGHa5/Quw3A8hI4HQDmSWBYSRgOL4wGr4dC0HLEcjFAOulZ2+64YDKhFYVFLsULhNJhTc1ev3eDTb61iVTLeuTyPlUx0KwTrGOm8cKrdwqtbQ77y8qsfff99t/97i2EQNI2Ym3c11VNuXnYOVk+4EOYEN5m4Lk0H0YBWq4294WD6j196878PXeuhT37yQ3z/4QU3Z4ZmRnSLGM/v9uzl1U1s9QbstNqUZtOu3th23cFAs0YTMUTsO3gQP/bAUX5yJucIxpEBfQI7lWIrGC/Q2bWx8cmz1+xLX/pjvvHtP0G1voGp3KGdiVVBpRoPNA4HiMXYMQbEUGjVH6Pa6wpixWIwRBgNSVXkmUMcD9nb6aK/s0txhIqzC9e38dzuQDsLs7ytnXFoIYYyupncY4qUUastf/yd54/cffzwH0w1G+uhCjcFCGiTNlo9saeJhCJ0iEr4etTWffqX/xpoMfv8t7/zdy9Z45Pv+eCn8KkjM5w34Loar40ru7TTM3HO9nojMhrn5mashPDy6oYVReBgWHKhkeFXPnQPb3PgyKCZI4egXQ2G86NK1gvKq1t9+8o3n5E3XnrZwu4Om5mw3WmbkIhlwTgeOGcx5k6QOeecUL13zLIMEyElsZrlFCtajIJQmVUVqJH93ojTnRbajba9dv6ie21jk0dXVnjHXIfdKqBpkbmjzbab+tJmD6+/9vq7Hzqy/187n6PUCEeB40S3qr7xzEEYa0meOnBM1AuEdD6zwWg0/6VnXngKh493fupTH+GjjWCjmEkvKMceOlDH83tDvPjWVWg0iGTsDUsWodD+uNC9/pD33HqCf+G+43o0N4swDi2xAQpzuFJGPr814B9duG7f/NbTevm1V+jHQ85MNdlsNakxQkNJhgqIEVQ103ESLAHoJc2ESb0tqNEQS6mKkVT9oVbFSEwjNVSYmZk1iQGvvX1JXtjc1PnFfdzfarihRTpTTDvaMGvoiy+8ODUuht37brvtm9VoDKORTDVrtHrcUeoh+5saU7UySZIgAR2QNRrwUPm9bz79T/eY/eipR9+D77vtgO2zqO0GpRstPnFtG09eWsX2YCwhkE6crV7fkI3dPbi8aZWanNi/yI/edVw+ua+jlcHGBipNdyvFdqmyHo1fvbyHrz3xPF5/8tuMW+ucnepYZ26WznuoRmcxEb+h9RRPOUqcVjMyhiTD55xpVKmGA4bxmF6cekexUNmNG+ssR6XNTLd1a3PPP3vhCvq+iTsX56QwYxMhblTKzkw7vrnRd6+/fqb1rltP/X6MmgT8ZKKMoVAjnEwGfdK6om6/CQn3mV/+K/j2m2/+1NMvXPintz72WPXTD51yp5oSBiQv9KOsDQoOSAxHBXZ6Q+ec1ypGnL28ir1un2U05A74iQ8/gvcvtiZoLCtTXKuivN2veGNc8cmLq+HJL39NetfXrCHCVqtB7wQaxrQyCBAMaiC8xRgZNGpVloxlxVBUSZesKE2jCqEqQhOF0KVejIbIUBU22BsZM7r9C3O2urbBcztdnZ2elZOz04yjwiqo+MxZNjMVn3vpjRUMh8/cefzA+RC1FkQMSXiMhDPWulQ1EipJizClzKAq8zxj+PYbF/7ubmx+8vEPfAyfPDLlvIhdM9XohP0QcGU4tJfOXefGXs+EQK+MMixLjEcFx0aZbXj8tY89bPdMiQSFDWtOTx/ExbHKk2tb/L3vPKtvvfya+L0h52ZmkGV1d8UUEpWkWhGCMRidI4VUjeboqDEaUQWDKSliCdU1I0nTCB2PUY1GAnpogDSaDSxMd9Df68p3z10ipqZtqtPhtEQNMD/dyMNLa9t24c3z737P3bf+29zZwIIK05QSxOqNVo9QJspWQk7ByeBoOsidRoanXnn98T/+ztlfu+MDH3V/7l234oSYtjLhm/2hffntXayPg+92B7Hf64kTp/1RgWsb20YQw/FYZlot/un33I+PH5hinvjsjGbsBePauOANBf7ri2/r83/yJLoXzqJD2MLSkrVaDUkaZCqOtFgW0LICLNBLNKEwhIpigGTOrKpoVRComnOkxYiyGBJVhM8ytPMGhv0BBqOKczMd5EJe2tixK6pybHFe501Bmis1qszM2pNPvXD7cqf1B6f2L20UZRAnaXIZTmq0vmZgkjc5B1ZrwLm7fvpnTn/jxbf/e+PI0db/+un3xfdM5dI3y1/ZHrit/lBFiTgusLc3dLu7fWx0+3L2yhaKsmA0p2MN+MSjd/JX7jgEBawCuGqQc0WwtyvgYq/iN158057+5nfYynxoTeWu02hEl5loiLEaDlCNBjFU0TRvwGjOtZsqFHV5Zt6JCErSiRKkiJKmVKsQg5rFMgqN4qBeHCCwUbfnhuMhp6ZmDKr28vkrMnCKh44cdN2odnanx4Hr+LW9Xb184drjj9x7+tcmpPdSyWjpotVaQUMlKVvkAJ3QCHox4MBcJ3zhmTP/r+c3il/Zf++D8a89esTtJ5gLmDtx3XHFGQPXNne5udNHadRLGzvc2uuRFjDo9TEoC/vJjz7KP7N/CjtQbJrJhhpfHw1xJWZ6Zqdvv//l7+Lqleuyv+UrzUXK0chiVSDz1FgWUWMpIVbmHJVeBWpmzqJ3UGhMiqM5HceFaiihsZIYKsaqihajc04IRiuGQ4RYcTTqsVBlZ3FRyyrw0vU1RskUAsk7bUy129x/7CRefvYN7IxHGw/cdetTFitzrPuPTP3JxCUUmE8hOCMkdwIB2fCCuazBCzuD5d/78pPPZkdvaf7tH/6gHmhSxFHGUHljYyAb67uMxYihKFzLZxyPxrK53WMMkWVVoqLDZ953H//csQUrrGQP4GoReLYMGImzLW3o73z7JXn+a19DS6xqTc3Az83JOJSuipUhBB32Bjbo98w3ssqEPskpKLzPLG94lVxIIaIaKYZQDln1eoZYmSepFhGLoVYamU+1RLxHfzBCyPI4NTODjesbvDQY28HFBds/3WS3RKbm9cKNjebV7V77E4/c+/sbOxtG8SlbMUNQQKMg1gqcAYAXEQfSjOb2HnnvV9Z78fjioUP68w/cIn3QPn9+M/z2C2/p21e3XHc8wsZwJNd3ejx35So393paBZWZmZmw092VTrPBX/noQzjiyR4UG8Z4dlhwtYjx/FqX333pLN948VVg1MfhIwe10WpHwFypFoveHkMZ4CRTl7dis9mWrJMXEkwka4j3Ag2kOK9RVeg9RETNeXM+Qy3G6zQqLcJirCDekSJajcYoBgNtttu0LOPZS2vm5+btwX1z1nZeLCrGWQuvvvjSXLPZXHvo1iPPFWWJGGIdFSY9tHpwXIiMSaCTMCx0WjoKes9vvnjuf2neckvroVMH+Yn5Ds8VEb/95nV+9exVPPvWKr7y0nl99eoGzRTrgyEGgzEqjbAyWHc8skfvvZP/5MHjaELtUlGhC+jF3gg9zez8Rpf/7Xe+wq1rN7gyN8+s1dJojJHwWZ6bqlocDKwcjawaj+myHDTAC8TEUWPwEEeLkFgFUyrgnZFMc7tmEItJrMMMZX+IshqbVRFVOYaJcGp2FjEGdvtjHFyaUXoXW1FxZK5l58bmnvvGNz507Oihf31wYXY4LsskBjdRdyRvDsyLEDkFMLHESXLwXtzvfueF314dDO98/JOftgdWpnF1qPqNK7v8/Vcu4pk3r9nOuJRghu3u0IaV2nq3q9vdPmNRWKWGj7/nIftb9x7mNA3rkdwog17sFXR5hm4l+I0vfIPPf/WrmF5cxnSn7aSRBy3GzmAoensYrq8zaQyqmc+cF4SMNBO6GExTtk+xWCXiPEXoPJwTCwA0BArNRATjYiRVWcUkhqWMVXB55pG1Wly9fk0u7xU4deQAVrxDK8/ilbKyV5594e79t97x3w533FZRRoTUjEyzt5xIuyYVkUzESJqWgNPHP/6/H7j9Nvngg/dwueP1i2/ecP/9udfswoVr3Nrq6upuT7qDysahQjGObDZy5q0meoORKYV/5dOP8wcWOrYNQzca3xgU8navwmurXX7nuZd59exb4mJl+44eh1CtGA78MMQ42tpk2N3JQ9FX9LZLjEZ+VBa50Hs4RKsCYjk2jaWDGTRU5iQ3iAgpBu8kqRh6MTBajKRGxDIKRcznTsJ4bMWwx1arTd/I7PnzV8RNz/HQwlS1mAs1a+DM9e3srVffvO8Tj9z9/xmMC0SNN3WiOUGVay2gTKMLBssysYZv4Ne/+eyvbWad+245fsJONz3fu9iRr1zd4+98+4wNBgX6w7Gtrm1LUVQ2LivuDkZoNjLOznQ4jmr7jx7Wf/DBu+Q2T15R2tXBgDvjwF7W5oWNHv/HV/7Eeuvb7uCxQ5iZ6tgwVK6sgqsAtaJiMew5xCq2p9o9T/FZ3spNPF3mLFG9BM77KC7JPXp6Ak4oUNI5qIEuSbJrjEbniAqiGqKVKsP+QAFje2YG4xg1FIVbWpi3Zp5pEdQfXVmK33r+1cbe5sY9t5y+7b+4qoQ5qyV7CZHE75JE1IOvowkEaGY5Xl3bPv3K5bV/tv+hh+XR207ZoQblGxdvyO9+80Vbv75nR5emsLG1I2fOXsL23tAqVanKII1mzkKpMyvL+jc/cI877oAtdbgRI98elOhWahWz+B9//xvy5rPPc9+xE9i3/2Asin6oqsL7VstiVYVyeyOTqui12lnpkGXMMmcGcY1MM58jSaaIj0yC0OIzEXFwWRZcoyE+y2lQVlXFGI1Z3jELSi0Lq0JgKEsrqoqd6Q6mp6bj9tYu+pGyf9+Cbg2GsrK8hDeubzbOPPvisfc++uBvVOMBYqgSh8AlVUjKRPaHyM35oJHmBO74z/7K33387lPh+48sSsdndrE3lvedOsJf/sj98eE7T+UUxlBFNjNxlRra0x2rRiNUMeJH3/uA/Oxt+6wEea6osF5VONcvcW6jxxdfOGMbFy+5vNHSfQcOm29lwjCOw944dtfXnY72wokTx3/rvocf+LFjR4/8q6XD+76gsWzsrt24XfOGZzODjwZTp+rhG0Ixl2nSbOdEIsbRQZ3PnGRezKgWzVQD4WnMcmqo4njY48zMjOTe64WdgTZg7uD8jJvutPTayKoLb7w2e2Bl31PzU80LsVbQZy3qJt/TIhLARBzaeY6nL2/9yJmN8d+65d47cXJuCu8+MJ/5zGG6ndmfeeg4P3f3cT16eMXtn5+2pblp9sYFVDLmjkqhjLImfvE9d7mPLzR0Aw6vjSt2R2OrOm15Za2Lz//+13WwuS1Hjx1F5qj9Xk+GFoMXF8q9LV92N4Z333L0Lz9y9+lfXFmY+w/79y1dGFdham9n79AwBN+aXzDnhYgGZDTvvIh3abCJFBOYE5ck4lIvJ4Fu3iKM3kDEEKQcFWoAmlMdJ1Wpw+GYU3OzDGrI2015c7MXLn33iWOPv+vRf9PIOJBoqGduagF1V6s2JvWKIOIy0naCtr7+8utP6uzywmMPPWSPLDZxsi08vX/OfvKBk/LDD98itx6Yl6PLczo11bZMHIuqxHBcmqnaUMz97IffLT+wr22rwaQrwE4VuDouuV0av/iN79pbL74kiwcP6NLiARn0tlk1GoiKWOzucXTl7eHd99zxow++++hHf3XfyqF/2+o0zloY3V0Nx7MAxDVaSjjAqwodoUpxDgZRc+YcPTXLkTVyg3gzrShZnmYmzYQG03KMajzicFxquz3lpnLFxuaunV6+jsGmL8aY3XvY7Q30ta98wSZDp3/72SfHdW0jjqrRtKr02u4B7ndTzUZTGKcS9/wxjq8u8HipsOU6mHEqKUpjKh4mE3z9tdd0V27a/OYtCXWCn17FZDzS6XyNXHY4iJIObp7Y1RvXbTvvcTAY2clCyHFtVy4XKGVw88mnLnWNjO++dfnn7f52ff6xsdU+O7t7Nzr+cnYfEWlvfrTQvfnkqz/x0lPPqLfV1acXd28t1YZDZW9/hhgHkVYXlNIkFCXVLDBBJcgQohJqECgVElJqolBw7O8j91Dur1UY55tYnZ+jGwOhBIQZeKlUWmnwUx3RONWx1nCogSVJ+xzTNEeM7bKKp3vDaLIm/vP/9G/eev3l3+VtFn/rz/3l8Ff/g19q7iHF1Tvvmb/9+z8sf/K1P+VXf++PxV+9ehsvf/Vlfvv1a2i2C1w7WCM3AisA0mSDvW5CkyPvUb47Bj78YMTVvS0OpwXqZAsvzhDXKYYuxlAOBHM3TBUqK8HKC3sTHTgHVQKzuoRUw2xrz8/O8fZbb2M8OYNw6PMzcJHomC/mZ+aiSWlKLW90Ola7Nn/38N7u43feeR6oanTaKbcOtthbXZzD0aOnbSaLPD3twz8/YtqYolgV9uapp+3sLjlaNSyKe11nfNSyd05mZuxsSOSs5hK9GNs4bBEuXlwzY3NHHKarrJqvsGmslbG5RyUMFVjntmxvL2M2y7ndTe1o2GVSl0hK6BSXwzKPokF/Bm8dj5Bm8YZfmzYYzTaMbtqx2eyMkQFmwrGvV3wpMdaymqLuFPnGrDlmbtWMS3ZuT52p1a1u1pjSbcYcOSlHOe6E6XSVGnXEbmL6/HRVszJEnf1Mem9GVj44m+K0jsL5RHl0eyv7ZstYWmVU7WkyxvE0RxeycmKJRTGKcXpqiUnbjnJhaGnkrKtOGkVFrzTKdKPHhcHUcm7QK7NlOh7yKGWmz9pxbf/2ez1P82SzMVFN2N7ZM86mLGxs1RizoGMlndsq1V2Vs6jaBHXOR7Vc7ijBqnzarPeSpZQrX8T+RCFm6nQjNS4/dZ33bLL4dGdaXCxNRoO8XL/Vy4o1qwXtTutMGuZs29qxlXtqObJx1JUp2WROGa2xNjaQVo1PBWc42R2Y7YS5N6NqbDeSj6bMYNbz4KHUCyIhNIUGoq6a0KcbaVLGpNa0O1c62QsztsWNZDBk1Hyq+3M/9YB/9L1v04nlPfBHfk28+96D5eSNa6PIsyzsjRDGNi/Z5g5tCzQzB13rrpsn2eN7l3T+eGz25GDL2mzHTk9GJgqfHJ7psWlbstFwYIvOsGnzuA/rWzceo4Sit53gsHHTUZ6PCw6qmzMcFocuvcCz1SlNimtsCkbdvKArTfLR3sB6l5foHXWtjmNXo6dwEnKzTZKmuMD1KE9OZlZTM4YR6Q46zAsO0aUsWkQyzUgnZanZK6vTOJZ4NFqWyWbTZuNBaUpnzWpUmiKY0d1oR9zGxDobKR3AAneuI7nfxxK9klWWnBmr4bTZaKk1O9Uu7yiMh6i1SF7Q6XmruHRRb27U2vB4rN23j7oO6XPXQOfahmZoTs3IGKM+HHmwiHTgZG49GaxIY5rFuS0m52nQPQKBnBpP6qNL7yBk+bZ0IdEqm6XNzTHmxYAXtwZ0M+/M4tacfXveGDvsSXcHmSVDbHZv+DjuBFqoUCsvGm2yyGwyalNa9blZzaU4H8/1yEZqXTgWuxwrKlB0GS5NL1kpumBrHKbOsl1CyfHiKSNbW+n1OM/6+Zw+CJfFYh7bEy0/vNWi9UbfGnrKcDsyNIWMZ4Z9y6UrKZuYaOGV4EOd9GxeprllLLdMKUVjX/rlKJ7VeNQXV0dS0USOZ8vs0kkTaZ+GeoOfmnO+jRHnO32aa8mpe72gs/x25JT4YT5NuTdIhBrTUYQzSt3XFedQOGWlD6kzUOfrsayfnfHm/XUeeAfUUj3jYm2jVKKUksfJEOEmSCU1WFdEUlqmPk11ZkR2yjTLKQhqrZmc2VZdSGVUD9KDfCrN9Y2ilOaUxlijQU93lqcgw2GYjA9HcyDXZQLFhg0WcJDdiKlM9zqkeI8ptTx7fh2gJi82ZzKKjPTb7ZH2iA2Etkxbo2E8xu9k7L1IH0BvZUZMHFyMbGSKmH61Nzj7NyXjuS44jZ2SU+RsQjWZ4NKDzWGvyfLI9NZTllTLNIvLKZ+lKjuxlp8YnPn3bB90V6BS8CGkGmFhjJs5rp+lyIarcbaftedxbLpx1Zk5Y9YlWFPuLwo9nS75ncmS44Vt5FLmvJc9O79Vom3fEfzZR1YOMqSb9uKgSy8HpvNC2WigqIhutOMFbfrM45prJUKV3Ma0/RCkPzk8dtNqzHVs2jjZ5CN7oc1Ff77qCr6dxrxwmi5b2xcmydRs2xzZ4WLl1WCscPtq93/o0+aDZ5uOsIPzMcQ+jjxRLo1ndZzLopTaKS+GG9puJq5rjrEz5NbTA9OTMbeqPXBB3JnPo7ejWkK3ByHF14wjW69OOm82vd6y+bxHqxq8btNy78D2umoIw3ZG89PY/Do1YKuTIWNe0AqasZJZgm+Rl8m6BhZ1x71jZDcbLnZbYnLKXo/YHY9y7HzOWq/qOZ2P8vnenJ+ejNKUqQaOtd0PoUvL1c68EceXR2ZzZmqU2Nlz3VVjK9tmS5ne65nZfKD30q4Nzp3sbtnpVsuG3aH99u16iyudWXfobFkPfLHRnMdtPzB0oJ7QM+7NR3JzJdOKgU56TfPYznMzS5MSKp8lWFcnRebc1DzKR41Zt76O3n+8Za7RtjRJhc3Sk5s+ivVeMB2z0QeamowsN0Yy0kk9K1IacT0jn4T4T9SZE5m0kHwGqbg+6HrGmMi2ZOHacRvVFHR0mtwiJoWtV7X22sHxNM61jGmt0zg+Bx1s9BgtChfeWppl6M1RgS7cwapkQpZ0NEnHWTuOM72LHT2ldT8ptSyGpMHXsdBs1Y1etxa5GmneR7yYA+M+z7Mp7q4XYJlnQmnV5H0PFHOMHV5NEOKLmnI7QsBBWTGaFwl0PWEV3PhI0zSNZFPzYWG5MyHnI2fzEHqePQxpz2ArAIcU54YlxfDZWjjr+n5Nn+RyLXvSj0f9OA9RJhZfhojUj1M0V9YyodQ9uBybaPVj3Btr2SnFrbnNvzM1p+eaSlvyODoZ0kLnRUxWmoxeM61YicRbdWqCLbG5tdXNqSlxlpZmm34sy77Lc1BpwFTqhkNzcXPvQrn4Z0kBs2XKpIsYFrpp5xr1uDeYm1lg1D26XcXJ1lRPD1LT9y3vDsSt78Iyz2NrZ+DrRWo6XcvWG64bZUiL0+m66w97r5vs81VDW/G2Xw9nvXHmSp6bJn3q1uikDfsxbn8y5c7Wy7FZ5DcqPbaSqNFOd2N9brFOBtGtxWiu9Bv1vjJnbT9Yz67rNPfeNvSonQx4W95yQ9uT0Uafnbc1DKmvNwYCFYKUFrcTuJVXqAotMzc5xnQjcuOK9Hpq3RZ3q9CO+O/pfTTPFvcXCK92eBtVLzMdrGxpm1r5ZWNL/kmJ0GBWvLL0P3lKGRy73/3E+3sKb3bLuHR2R6EnzZLzuOa4vk2GBpj4G62NX3AaltxeCEeqLYkP4x3AwueyjM/GxjZo0cSU53l1uJ64bqZ8XHDs3tPT/G53tE0N51z4nH/qFuFrp4M6/lymtR2Q75+WLXTsGkuFbBRVbjbaeqO+H4dztYcyxSbdqjuVuHIXV1nvREp+8N9SUyeq49Osz6qbxOJcxxnUXHPzu6X3PkjZqR7LrHmGYcTUcQnTLA1QLPRIiaOOxrIrfLMOF7NLM0Ws9ItfaHTG2K7cN/HOa8ZcKUEMcQ7YrDX9cUXlqSpQ4YOnE1KJvBFGRWtvOBnk4Ns5NxfBW5Nu60jDvpe0h8bwzsm1t8Y2NkPblN2K25nGqTdOKUKDp2ijvXPXfHU7Nqa9G64vhLbcCTOvSHkyaTYWpaX3bavcvHrfsc1o1/QsGkndzt2AfExUR/GJdaN3xWx3d0uZ0vFsq5o2ZTvL6oZZ22aTLWSrpQx7SXA/DIvSt1Wtq7l7lu2FxaTgOm7luKblUWpGMVdb7nUdd+g7ZZlWjPmk9tSpM06s8ilKW1G97WdanD1eba15dRrFbjSlHqPnTiKb6dPz1oynMt/aivWs7LZNKfPtu83c9vNlNa2eNoyf7aakiUkbW7WeIrVCa53u2umkNtRUeVqx0O7X89VpqmY7RcUgWTEz3d2r5jsbZR1PsZI2Mp3NojXTLI3jkuF6bnHRpp0YW9xdxc35yF4/G9nkbJx6IhYIrVCWFdcXi3S2mnE1XYSU8+lseTr2tRLmU0RmeeVKrJyKVj0Zi9wUE+n7Mq6bqlUqCWtkoyupSDVVDONaLzR1oWvnpZadKXcW6mrmMhkVpAJq0MJypLYfUTeMkbLNKQ3zpKXCXG+iSjuvMhcykiI5bWXLarrIQm4ymg7HyfliXcYs43BSjP2wm+enkfE0jm0chDnPTiQY1zpn2lgutOUyzUgH0mFotBxlOtDauZBJUdZzWY8lZ7Q4Wc/kNJiaGZWMLW3F9M2Qi8OMe4iN/liMY5wLZUw2m4wmzuv0KtHKGH2ehNKhtVUAY7NUkPYTh1GjM6MgS2/6IEsdyzTOe2Nlk6yaehunnnE9wc79qcaZdcvYbLbYtHFxwNqDdmXOl2FZDIzcTZBP1nWvHKnRabgexj4d80hnaJIxpZFpNkE2Es1t1sr1WNKY6xnJVjm3lSm5S27KIWc0mL63JXYPY32rW7XdHZ1qLW0rj9luibhkYWpEfsB6eEBP5jI3xY7vurjM1Iy8xVXTiNv62NzL8m2vw8LHDcNJt4Y2N91yNqL03bhrTdfRWmQpX+92c3vSFuvzE1u2rSwaz6PzXFbjdVUJI5ux6xwYW4gRJb9pRXqzRPfDnTkzt6XVLK0VDdnjxvzYzoV0k9ZkgkR7NEwWuVxfNM3ppuw2Zss+bDoNMWXPr7VpFHKZFPnYtNfIt+e6nCyf75Xp/Pns2Sfvz57/wp8+GY6GRuv1nJd15KMSc25Lz+m4NDJNNAtSOgm1UNQ26zn3rZDXaNoZzTvTPFvvBcxDaGh0ETqcC6PBmU63o1yE1SjmvhLpBYVLo05NUUFxrDMSzxdpg7pu9G7RuJv58ryf5oPr9VoaB2WrjkPumHYUxRVDW4tuXA1Uh+RwtjtxTStbrbfWnDNzD8fkfOJhvcw2LneVYtdz5Fk3+bC4dHZ5U3l3aq6bWO+jZVOTHVJqcynymHDrEuFN9DfmTLdlbLTZdqvsLpQbc60Zsd8dLbW0KI4Wg1L3XlPWs6nTk9WSpjeuxUMdW8i+bqbmqZ2wamZZzOOWx8kNxrKR5nSCsBu7QUwXi3PIvHIvJyfXhBUJv9NxWc1SPazW/hIThzHRcPnpm2NLm3cWpUhtq3EyC0lo3lTZ21kaVvNSm+7YHmVjyMbSbtjDXKPPl2LWc59OaDcbxbaTB27ScAZW26iiabbmyt5jOEqUXWkuGjPtjmR9DjRcTZKzZY6P1QYclJusOR/AI0+/2Or1O7Z9c9J8FGKu2rw5b8n+nrPTd7dNI09p3ir4XmyD8czqOoRQz/uUOHUdZmuoGnEsQ+xoU0eeqrpiPk9NP8k4Vh1nQjb1WVpNyeVE41gpljO5vv2Cbe1sisr5jK2b7QpjM7oScvUu/dRr9GySNr6IlnQTF7SBRJlYSp0iC5cGyeYd3VGA8DiJnpc0DIY5m3IZ1qGdEufJ0nqRUgcyD9dbKV96rJTGdMzuoT1IIfMkabQyF5cudmi0lybBQtJDD82jHNw31c+Q1DFm4jhjaAg8H2Ic00OqA1p/O6O5uc5vHFouHNc9EOu17KZzFVfWpF63bYCcLUcp9BKzKfHscNumC5+8ptPjuc46+aSTM2fVnJcpQnEo9d5UkH2xWa9YtNiuJZ9ktdRWaWLQjSb4uHLezvbbZWa3rE7NlLpq2XVsr7QhGaQ+ZvJc79/uxOoyQzLIVanRJKfz5aQ8ONi48Uzsmm2djQ22Prjkm1L5wDcObE2M6jVCVBnzTGkxLfGZ9ozjaDJIm4WVLBqm0YoyVVOU2q3ec+3+wZQeeVQAAAAASUVORK5CYII=";

export const HERO_BG = "/hero.webp";

export function dotPattern(colorHex, opacity) {
  const enc = encodeURIComponent(colorHex);
  return {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'34\' height=\'34\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1.3\' fill=\'${enc}\' fill-opacity=\'${opacity}\'/%3E%3C/svg%3E")`,
    backgroundSize: "34px 34px",
    backgroundRepeat: "repeat",
  };
}

export const SERVICE_THEME = {
  generalne: { tint: "#EAF3FB", dark: false, variant: "generalne" },
  vikna: { tint: "#E1F3F0", dark: false, variant: "vikna" },
  remont: { tint: "#FDECDF", dark: false, variant: "remont" },
  kvartyra: { tint: "#E2F0F5", dark: false, variant: "kvartyra" },
  ofis: { tint: "#FFF6DA", dark: false, variant: "ofis" },
  mebli: { tint: "#141B32", dark: true, variant: "mebli" },
};


export const C = {
  bg: "#F0F4F3", bgSoft: "#E6EDEB", ink: "#0A232B", inkSoft: "#153F49",
  lemon: "#F2BE22", lemonDeep: "#D9A000", lemonSoft: "#FBF0D2", mint: "#2E9B7D", mintSoft: "#C3E8DA",
  ash: "#7C8B8A", white: "#FFFFFF", iconVivid: "#0A9B78",
};

export const SERVICES = [
  { id: "generalne", name: "Генеральне прибирання", icon: Sparkles, desc: "Повний цикл: від стель до плінтусів", rateMin: 90, rateMax: 145, unit: "м²", areaMin: 15, areaMax: 150, areaDefault: 55 },
  { id: "vikna", name: "Миття вікон", icon: Wind, desc: "Рами, відкоси, підвіконня, скло без розводів", rateMin: 160, rateMax: 200, unit: "м² скла", areaMin: 4, areaMax: 50, areaDefault: 12 },
  { id: "remont", name: "Прибирання після ремонту", icon: Building2, desc: "Будівельний пил, плівка, розчин", rateMin: 100, rateMax: 150, unit: "м²", areaMin: 15, areaMax: 150, areaDefault: 55 },
  { id: "kvartyra", name: "Експрес прибирання", icon: HomeIcon, desc: "Швидкий порядок за один короткий візит", rateMin: 40, rateMax: 65, unit: "м²", areaMin: 15, areaMax: 150, areaDefault: 50 },
  { id: "ofis", name: "Прибирання офісів", icon: Building2, desc: "Графік під ваш бізнес", rateMin: 35, rateMax: 55, unit: "м²", areaMin: 15, areaMax: 300, areaDefault: 80 },
  { id: "mebli", name: "Хімчистка меблів", icon: Sofa, desc: "Дивани, килими, матраци", priceOnRequest: true },
];

export const DISTRICTS = ["Центральний", "Заводський", "Корабельний", "Інгульський", "Варварівка", "Тернівка", "Соляні", "Матвіївка", "Баштанка", "Нова Одеса", "Снігурівка"];

export const SERVICE_DETAILS = {
  generalne: {
    intro: "Замовити прибирання квартири в Миколаєві можна за чек-листом — від стель до плінтусів, без «а це ми не встигли».",
    checklist: [
      { room: "Кухня", emoji: "\ud83c\udf73", items: [
        "Миття фасадів кухонних меблів", "Очищення стільниці", "Миття кухонного фартуха",
        "Очищення мийки та змішувача", "Видалення жиру з поверхонь", "Зовнішнє миття холодильника",
        "Зовнішнє миття духової шафи", "Зовнішнє очищення мікрохвильової печі", "Зовнішнє миття витяжки",
        "Миття плити", "Протирання побутової техніки", "Видалення пилу з усіх доступних поверхонь",
        "Миття підвіконь", "Очищення дверей і дверних ручок", "Протирання плінтусів",
        "Миття вимикачів і розеток", "Видалення павутиння", "Сухе та вологе прибирання підлоги", "Винесення сміття",
      ]},
      { room: "Ванна кімната", emoji: "\ud83d\udebf", items: [
        "Миття ванни або душової кабіни", "Видалення вапняного нальоту", "Очищення унітаза",
        "Миття біде (за наявності)", "Очищення умивальника", "Полірування змішувачів",
        "Миття дзеркал", "Очищення плитки", "Дезінфекція сантехніки", "Очищення меблів",
        "Протирання дверей", "Миття вимикачів", "Прибирання підлоги", "Видалення пилу та павутиння",
      ]},
      { room: "Вітальня", emoji: "\ud83d\udecb\ufe0f", items: [
        "Видалення пилу з меблів", "Протирання полиць", "Очищення декоративних елементів",
        "Миття підвіконь", "Протирання дверей", "Миття дзеркал", "Очищення плінтусів",
        "Видалення павутиння", "Пилососіння", "Вологе миття підлоги",
      ]},
      { room: "Спальня", emoji: "\ud83d\udecf\ufe0f", items: [
        "Видалення пилу з меблів", "Протирання приліжкових тумб", "Миття підвіконь",
        "Очищення дзеркал", "Протирання дверей", "Очищення плінтусів",
        "Видалення павутиння", "Пилососіння", "Вологе миття підлоги",
      ]},
      { room: "Передпокій", emoji: "\ud83d\udeaa", items: [
        "Очищення меблів", "Миття дзеркал", "Протирання дверей", "Миття вимикачів",
        "Очищення плінтусів", "Видалення пилу", "Пилососіння", "Вологе миття підлоги",
      ]},
    ],
    lifehacks: ["Провітрюйте приміщення до і після прибирання — хімія вивітриться швидше", "Прибирання «зверху вниз»: спочатку стелі й полиці, підлога — в останню чергу", "Окрема ганчірка для кухні й окрема для санвузла — так не переносите бактерії"],
    articles: [
      { title: "Скільки коштує генеральне прибирання квартири 50 м²", cat: "expert" },
      { title: "Генеральне vs звичайне прибирання — в чому різниця", cat: "expert" },
      { title: "Як часто варто робити генеральне прибирання", cat: "home" },
      { title: "Один робочий день бригади «чисто.» зсередини", cat: "backstage" },
    ],
    faqExtra: { q: "Що якщо забруднення виявиться сильнішим, ніж я вказав(ла)?", a: "Майстер оглядає приміщення до початку робіт і озвучує фінальну суму — ви завжди можете погодити її або відмовитись без штрафів." },
  },
  vikna: {
    intro: "Замовити клінінг вікон просто: миємо вікна, рами й відкоси без розводів — знаємо, як миколаївське сонце виявляє кожну смужку.",
    checklist: ["Скло з обох боків", "Рами та підвіконня", "Відкоси та стики", "Москітні сітки (за потреби)", "Полірування насухо без розводів", "Прибирання робочої зони після завершення"],
    lifehacks: ["Мийте вікна в похмуру погоду — на сонці засіб висихає до того, як його встигнуть розтерти", "Рухи по склу робіть спочатку горизонтально, потім вертикально — так легше знайти пропущену смужку", "Мікрофібра замість газети — менше ворсу, менше розводів"],
    articles: [
      { title: "Чим мити вікна взимку, щоб не тріснули від перепаду температур", cat: "home" },
      { title: "Миття вікон у висотках — коли потрібен промисловий альпініст", cat: "expert" },
      { title: "Як часто варто мити вікна в квартирі біля дороги", cat: "home" },
    ],
    faqExtra: { q: "Миєте вікна вище 2 поверху без ліфта чи балкона?", a: "Так, для складних випадків виїжджає майстер з альпіністським спорядженням — вартість уточнюємо окремо під час огляду." },
  },
  kvartyra: {
    intro: "Замовити прибирання квартири швидко — за один візит, без глибокого циклу генерального прибирання, коли просто потрібно, щоб усе виглядало доглянуто.",
    checklist: [
      "Збір і прибирання сміття по кімнатах", "Розкладання речей по своїх місцях",
      "Протирання поверхонь у зоні витягнутої руки", "Пилосос м'яких меблів і підлоги",
      "Миття підлоги", "Винесення сміття",
    ],
    lifehacks: [
      "Експрес-прибирання раз на тиждень економить 2-3 години генерального прибирання наприкінці місяця",
      "Почніть з розкладання речей по місцях — тоді протирання і пилосос підуть швидше",
      "Тримайте кошик для сміття на кухні й у кожній кімнаті — менше сміття «губиться» по квартирі",
    ],
    articles: [
      { title: "Експрес-прибирання vs генеральне — коли що обирати", cat: "expert" },
      { title: "Як підтримувати порядок у квартирі між генеральними прибираннями", cat: "home" },
      { title: "Скільки коштує швидке прибирання 2-кімнатної квартири", cat: "expert" },
    ],
    faqExtra: { q: "Чим експрес-прибирання відрізняється від генерального?", a: "Експрес не включає миття кахлю, техніки, плінтусів і робіт на висоті — це швидкий візуальний порядок: сміття, поверхні в зоні руки, підлога. Для глибокого циклу оберіть «Генеральне прибирання»." },
  },
  remont: {
    intro: "Замовити клінінг після ремонту можна онлайн: прибираємо так, щоб у квартиру можна було одразу заносити меблі — без пилу в шафах і плям розчину на плитці.",
    checklist: [
      "Зняття захисної плівки та малярського скотчу", "Видалення будівельного пилу зі стель і стін",
      "Миття вікон і підвіконь від будівельного пилу", "Очищення дверей, коробок і плінтусів від розчину та фарби",
      "Видалення слідів клею, силікону, монтажної піни", "Пилосос будівельного пилу зі щілин і стиків",
      "Миття світильників і вимикачів", "Очищення сантехніки від вапна та розчину",
      "Винесення будівельного сміття", "Дворазове вологе миття підлоги (пил осідає повторно)",
      "Миття кухонних меблів і техніки від пилу", "Полірування дзеркал і скляних поверхонь",
    ],
    lifehacks: [
      "Прибирання після ремонту краще замовляти через 1-2 дні після завершення робіт — частина пилу встигає осісти й не піднімається в повітря знову",
      "Вологе миття підлоги варто робити двічі: перший раз забирає основний бруд, другий — те, що осіло за кілька годин з повітря",
      "Знімайте малярський скотч і плівку повільно під кутом ~45° — так на поверхні лишається менше клейких слідів",
    ],
    articles: [
      { title: "Скільки коштує прибирання після ремонту 1-кімнатної квартири", cat: "expert" },
      { title: "Чому прибирання після ремонту дорожче за звичайне", cat: "expert" },
      { title: "Через скільки днів після ремонту можна замовляти прибирання", cat: "home" },
    ],
    faqExtra: { q: "Чи вивозите будівельне сміття?", a: "Ми прибираємо і пакуємо сміття у мішки, але сам вивіз замовляється окремо — підкажемо перевірених партнерів або допоможемо це організувати." },
  },
  ofis: {
    intro: "Замовити клінінг офісу можна під зручний графік — рано вранці або після закінчення робочого дня, без шкоди для роботи команди.",
    checklist: [
      "Прибирання робочих місць без переміщення документів", "Пилосос килимових покриттів і м'яких меблів",
      "Миття підлоги (кахель, ламінат, лінолеум)", "Очищення кухні для персоналу: мийка, мікрохвильовка, холодильник ззовні",
      "Дезінфекція санвузлів і поповнення витратних матеріалів", "Миття скляних перегородок і дверей",
      "Протирання оргтехніки ззовні: монітори, клавіатури, принтери", "Винесення сміття з усіх кошиків",
      "Миття вікон за окремим графіком", "Провітрювання приміщень",
    ],
    lifehacks: [
      "Графік прибирання рано вранці чи ввечері не заважає команді працювати в звичайному ритмі",
      "Поповнення витратних матеріалів (мило, папір) варто прив'язати до графіка клінінгу — менше термінових дзвінків",
      "Для опен-спейсів раз на тиждень варто додавати глибше чищення килимового покриття, не тільки пилосос",
    ],
    articles: [
      { title: "Скільки коштує клінінг офісу в Миколаєві", cat: "expert" },
      { title: "Як часто потрібно прибирати офіс", cat: "home" },
      { title: "Аутсорсинг клінінгу vs штатний прибиральник — що вигідніше бізнесу", cat: "expert" },
    ],
    faqExtra: { q: "Можете прибирати після закінчення робочого дня?", a: "Так, більшість офісних контрактів виконуємо ввечері або рано вранці, щоб не заважати роботі команди." },
  },
  mebli: {
    intro: "Замовити клінінг меблів можна онлайн: глибоко чистимо м'які меблі, килими та матраци парогенератором — виводимо бруд зсередини оббивки, а не просто освіжаємо поверхню.",
    checklist: [
      "Пилосос для видалення поверхневого пилу та шерсті", "Попередня обробка плям спеціальним засобом",
      "Глибоке чищення оббивки парогенератором чи екстрактором", "Дезінфекція та усунення запахів",
      "Чищення важкодоступних місць: шви, підлокітники, ніжки", "Сушіння з вентиляцією для швидкого висихання",
    ],
    lifehacks: [
      "Свіжі плями видаляються значно легше — не чекайте до генерального прибирання, якщо щось щойно розлили",
      "Раз на 6-12 місяців варта профілактична хімчистка навіть без видимих плям — пил і алергени накопичуються всередині оббивки",
      "Перевірте бирку виробника меблів — деякі тканини потребують сухого, а не водного методу чищення",
    ],
    articles: [
      { title: "Скільки коштує хімчистка дивана в Миколаєві", cat: "expert" },
      { title: "Як часто варто робити хімчистку м'яких меблів", cat: "home" },
      { title: "Хімчистка килима вдома чи в компанії — що обрати", cat: "expert" },
    ],
    faqExtra: { q: "Скільки сохнуть меблі після хімчистки?", a: "Залежно від типу тканини та вологості в приміщенні — зазвичай 4-8 годин до повного висихання, рекомендуємо забезпечити провітрювання." },
  },
};

export const ARTICLES_CONTENT = {
  "article-generalne-price": {
    title: "Скільки коштує генеральне прибирання квартири 50 м²",
    serviceId: "generalne",
    body: [
      "Генеральне прибирання — це не кілька годин роботи з ганчіркою та пилососом. Багато людей уявляють його як звичайне прибирання, яке займає дві-три години. Насправді це одна з найскладніших клінінгових послуг: навіть квартира площею 50 м² може потребувати 6–9 годин роботи бригади з 2-3 людей, якщо мета — не просто освіжити приміщення, а дійсно очистити його від накопиченого пилу, жиру та інших забруднень.",
      "За роки роботи ми прибирали десятки квартир однакової площі — і можемо впевнено сказати: дві квартири по 50 м² майже ніколи не потребують однакового обсягу робіт. В одній достатньо провести вологе прибирання, а в іншій доводиться витрачати кілька годин лише на кухню. Причина проста — площа не визначає складність роботи. На кінцеву вартість найбільше впливає ступінь забруднення.",
      "## Від чого залежить вартість генерального прибирання",
      "Перше, на що ми звертаємо увагу, — не площа квартири, а її стан. Дві квартири по 50 м² можуть коштувати зовсім по-різному. В одній господарі регулярно підтримують чистоту, а генеральне прибирання замовляють один-два рази на рік. В іншій бруд накопичувався тривалий час: жир на кухні, вапняний наліт у ванній кімнаті, пил у важкодоступних місцях, забруднені плінтуси, двері та меблі. Зовні ці квартири мають однакову площу, але обсяг роботи може відрізнятись у два рази.",
      "Саме тому генеральне прибирання квартири 50 м² у більшості випадків коштує від 7 000 грн, але остаточна вартість завжди залежить від фактичного обсягу робіт.",
      "## Чому професійний клінінг — це більше, ніж миття підлоги",
      "Повний цикл генерального прибирання охоплює стелі, карнизи, кухонну техніку зсередини й ззовні, сантехніку, плінтуси, дверні ручки, вимикачі — усе те, що при звичайному щотижневому прибиранні залишається поза увагою місяцями. Саме накопичення в цих зонах і визначає, скільки реально часу піде на об'єкт.",
    ],
  },
  "article-generalne-vs-standard": {
    title: "Генеральне vs звичайне прибирання — в чому різниця",
    serviceId: "generalne",
    body: [
      "Питання «навіщо платити за генеральне, якщо я і так щотижня прибираю» виникає майже в кожного клієнта, який звертається вперше. Відповідь — у тому, які саме зони обробляються.",
      "## Що входить у звичайне прибирання",
      "Звичайне (підтримуюче) прибирання — це те, що людина або клінер робить регулярно: підлога, поверхні в зоні досяжності руки, сміття, пил, який очевидно видно. Такого прибирання достатньо, щоб квартира виглядала охайно день у день.",
      "## Що додає генеральне прибирання",
      "Генеральне прибирання охоплює зони, до яких при звичайному циклі руки або не доходять, або доходять рідко: стелі й карнизи, техніка зсередини (духова шафа, витяжка, холодильник), кахель і шви між плиткою, дверні коробки й плінтуси по всьому периметру, вимикачі й розетки, підвіконня та відкоси. Саме тут накопичується пил, жир і бактерії, які не видно неозброєним оком, але які відчутно впливають на якість повітря й гігієну в квартирі.",
      "## Як часто потрібне кожне з них",
      "Оптимальна схема — підтримуюче прибирання щотижня своїми силами чи експрес-прибиранням, і генеральне 2-4 рази на рік залежно від кількості мешканців, домашніх тварин і того, чи є в квартирі курці. Квартири з дітьми чи тваринами зазвичай потребують генерального прибирання частіше.",
    ],
  },
  "article-vikna-vysotky": {
    title: "Миття вікон у висотках — коли потрібен промисловий альпініст",
    serviceId: "vikna",
    body: [
      "Миття вікон у багатоповерхівці — це не завжди питання зручності. Починаючи з певного поверху, стандартні методи (з підвіконня, зі стрем'янки) стають фізично небезпечними чи взагалі неможливими.",
      "## Коли достатньо звичайного виїзду",
      "Якщо є балкон або лоджія, з якого можна дотягнутись до зовнішньої частини вікна, або якщо квартира на першому-другому поверсі з зручним доступом знадвору — працює звичайна бригада зі стандартним інвентарем: скребками, мікрофіброю, телескопічними щітками.",
      "## Коли потрібен промисловий альпінізм",
      "Верхні поверхи без балкона, панорамні вікна на висоті, фасадне скління — усе це вимагає майстра з альпіністським спорядженням: страхувальна система, спеціальні мотузки, навички роботи на висоті. Це окрема кваліфікація, не кожен клінер має відповідний допуск і сертифікацію.",
      "## Чому це коштує дорожче",
      "Робота на висоті вимагає не лише спорядження, а й часу на підготовку: страховку, перевірку кріплень, погодні умови (у вітряну погоду робота на висоті небезпечна і часто переноситься). Тому вартість для висоток вище за стандартну і завжди узгоджується окремо після огляду фасаду та поверху.",
    ],
  },
  "article-kvartyra-vs-generalne": {
    title: "Експрес-прибирання vs генеральне — коли що обирати",
    serviceId: "kvartyra",
    body: [
      "Найчастіша плутанина клієнтів — коли обирати швидке прибирання, а коли варто одразу планувати генеральне.",
      "## Коли достатньо експрес-прибирання",
      "Якщо квартира в цілому доглянута і потрібно просто навести порядок перед гостями, після звичайного тижня чи перед вихідними — цього достатньо. Експрес-прибирання охоплює сміття, поверхні в зоні витягнутої руки, підлогу. Це швидкий візуальний порядок, а не глибоке очищення.",
      "## Коли варто одразу обирати генеральне",
      "Якщо прибирання не робилось кілька місяців, у квартирі є домашні тварини, курці, або плануєте здавати/приймати квартиру після тривалої відсутності — експрес-прибирання просто не встигне впоратись із накопиченим брудом у важкодоступних місцях. У такому випадку краще одразу замовити генеральне — це вийде дешевше за два експрес-виїзди поспіль, які все одно не дадуть глибокого результату.",
      "## Практична порада",
      "Багато наших клієнтів обирають комбінацію: одне генеральне прибирання як стартову точку, а далі — регулярне експрес-прибирання раз на тиждень чи два для підтримки. Це економічно вигідніше, ніж запускати квартиру до стану, який щоразу вимагає повного циклу.",
    ],
  },
  "article-remont-why-expensive": {
    title: "Чому прибирання після ремонту дорожче за звичайне",
    serviceId: "remont",
    body: [
      "Ціна за квадратний метр після ремонту вища за звичайне генеральне прибирання — і це не націнка, а відображення реального обсягу роботи.",
      "## Інший тип забруднення",
      "Будівельний пил дрібніший і летючіший за побутовий бруд — він осідає не тільки на поверхнях, а й всередині шаф, у щілинах, на світильниках. Прибрати його з першого разу неможливо: потрібне повторне вологе миття, коли пил, що залишався в повітрі, знову осяде.",
      "## Додаткові операції, яких немає у звичайному прибиранні",
      "Зняття захисної плівки й малярського скотчу, видалення слідів клею, монтажної піни, розчину й фарби з поверхонь, чищення сантехніки від будівельного пилу й вапна — усе це трудомісткі операції, яких просто немає при звичайному прибиранні доглянутої квартири.",
      "## Підсумок",
      "Різниця в ціні — це різниця в реальних годинах роботи, а не довільна націнка за слово «ремонт» у назві послуги.",
    ],
  },
  "article-generalne-frequency": {
    title: "Як часто варто робити генеральне прибирання",
    serviceId: "generalne",
    body: [
      "Універсальної відповіді «раз на місяць» чи «раз на рік» тут немає — частота залежить від кількості мешканців, домашніх тварин і того, чи є в домі курці.",
      "## Орієнтовна частота",
      "Для квартири без тварин і дітей зазвичай достатньо генерального прибирання 2 рази на рік. Якщо є домашні тварини (особливо ті, що линяють) — оптимально 3-4 рази на рік. З маленькими дітьми та алергіками — також частіше, оскільки пил і алергени в важкодоступних місцях напряму впливають на здоров'я.",
      "## Що впливає на частоту сильніше за «норму»",
      "Розташування квартири теж має значення: вікна на жваву вулицю чи будівельний майданчик поруч означають більше пилу, а отже — частіше генеральне прибирання. Курці, відкриті вікна на першому поверсі, приватний будинок з садом — усе це прискорює накопичення бруду в порівнянні зі «стандартною» квартирою.",
      "## Як зрозуміти, що вже час",
      "Найпростіший орієнтир — пил помітний на поверхнях за 2-3 дні після звичайного прибирання, або з'явився стійкий запах, який не зникає після провітрювання. Це ознака, що поверхневого підтримуючого прибирання вже недостатньо.",
    ],
  },
  "article-generalne-backstage": {
    title: "Один робочий день бригади «чисто.» зсередини",
    serviceId: "generalne",
    body: [
      "Часто клієнти уявляють генеральне прибирання як «людина з ганчіркою на пару годин». Показуємо, як це виглядає насправді.",
      "## Ранок: підготовка та виїзд",
      "День бригади починається з перевірки інвентарю — парогенератори, пилососи, набір хімії під конкретний тип забруднення (кухонний жир — одні засоби, вапняний наліт у ванній — інші). Це не одна пляшка «на все», а кілька спеціалізованих засобів.",
      "## На об'єкті: огляд перед стартом",
      "Перш ніж почати, старший у бригаді оглядає приміщення разом з клієнтом, узгоджує пріоритети (наприклад, «кухню треба ідеально, у спальні — стандартно») і підтверджує фінальну вартість, якщо вона відрізняється від орієнтовної.",
      "## Сам процес",
      "Робота йде «зверху вниз і від чистого до брудного»: спочатку стелі й верхні полиці, в останню чергу — підлога, щоб не переносити бруд назад на вже чисті поверхні. Кожна кімната проходить по одному чек-листу, тому нічого не забувається навіть коли на об'єкті кілька людей одночасно.",
      "## Завершення",
      "Наприкінці — спільний прохід по квартирі з клієнтом, перевірка результату, і лише після цього бригада виїжджає далі.",
    ],
  },
  "article-vikna-zyma": {
    title: "Чим мити вікна взимку, щоб не тріснули від перепаду температур",
    serviceId: "vikna",
    body: [
      "Взимку миття вікон має один реальний ризик, про який мало хто думає — не якість очищення, а термошок скла.",
      "## У чому небезпека",
      "Якщо на морозі полити холодне скло гарячою водою (або навпаки — теплий засіб на дуже холодне скло у різкому перепаді), різниця температур може спричинити мікротріщини, особливо на старих чи вже пошкоджених склопакетах.",
      "## Як робимо це правильно",
      "Використовуємо засоби кімнатної температури, а не гарячу воду. Уникаємо миття у сильний мороз (нижче -5…-7°C) — засіб просто замерзає на склі, не встигнувши подіяти, і ефекту немає, а ризик термошоку зростає. У холодну погоду ефективніше й безпечніше мити вікна зсередини приміщення, де температура стабільніша.",
      "## Практична порада власникам",
      "Якщо потрібно терміново взимку — краще перенести миття зовнішньої частини на відносно теплий день (вище -3…-5°C), а внутрішню частину можна мити в будь-яку погоду без ризику.",
    ],
  },
  "article-vikna-doroga": {
    title: "Як часто варто мити вікна в квартирі біля дороги",
    serviceId: "vikna",
    body: [
      "Розташування вікон впливає на частоту миття сильніше, ніж пора року.",
      "## Чому вікна біля дороги забруднюються швидше",
      "Вихлопні гази, пилюка з проїжджої частини, бризки під час дощу — усе це осідає на склі значно швидше, ніж у дворі чи на верхніх поверхах, віддалених від траси. Наліт від вихлопів до того ж складніше видаляється, ніж звичайний пил — містить жирову складову, яка «прилипає» до скла.",
      "## Орієнтовна частота",
      "Для квартир на перших-третіх поверхах вздовж жвавих вулиць рекомендуємо мити вікна раз на 1-2 місяці. Для верхніх поверхів чи дворових вікон вистачає 2-3 разів на рік — така сама частота, як і для більшості звичайних квартир.",
      "## Додатковий фактор — сезон",
      "Навесні після танення снігу й восени після листопаду наліт на склі найпомітніший незалежно від розташування — це вдалий момент, щоб суміщати планове миття з сезонним.",
    ],
  },
  "article-kvartyra-support": {
    title: "Як підтримувати порядок у квартирі між генеральними прибираннями",
    serviceId: "kvartyra",
    body: [
      "Генеральне прибирання дає результат «з нуля», але без підтримки квартира повертається до попереднього стану швидше, ніж здається.",
      "## Щоденні звички, які справді працюють",
      "Мити посуд одразу після їжі, а не залишати на потім — це запобігає засиханню жиру, яке потім важче видалити. Провітрювання щодня 10-15 хвилин зменшує вологість і, відповідно, ризик появи цвілі у ванній.",
      "## Щотижневий мінімум",
      "Пилосос підлоги й м'яких меблів, протирання поверхонь у кухні та ванній, зміна постільної білизни — цього достатньо, щоб квартира не «накопичувала» бруд між генеральними циклами.",
      "## Коли варто підключити експрес-прибирання",
      "Якщо щотижневого мінімуму не вистачає часу чи сил — регулярне експрес-прибирання (раз на 1-2 тижні) закриває цю потребу без витрат на повний цикл генерального. Це саме та комбінація, яку обирає більшість наших постійних клієнтів.",
    ],
  },
  "article-kvartyra-2room-price": {
    title: "Скільки коштує швидке прибирання 2-кімнатної квартири",
    serviceId: "kvartyra",
    body: [
      "Експрес-прибирання рахується простіше за генеральне, бо обсяг робіт більш передбачуваний — це не глибоке очищення, а швидкий візуальний порядок.",
      "## Від чого залежить ціна",
      "Основний фактор — площа квартири, а не ступінь забруднення (він менш критичний, ніж для генерального прибирання, оскільки експрес-прибирання і так не включає роботу з давніми забрудненнями). Для типової 2-кімнатної квартири 45-55 м² орієнтовний розрахунок можна одразу побачити в калькуляторі на сторінці послуги.",
      "## Що впливає на кінцеву суму",
      "Кількість кімнат і санвузлів, наявність домашніх тварин (більше шерсті — більше часу на пилосос), і чи давно робилось попереднє прибирання будь-якого типу.",
      "## Коли варто обрати генеральне замість експрес",
      "Якщо прибирання не було довше місяця — експрес не встигне дати відчутний результат за важкодоступними зонами. У такому випадку економічніше одразу замовити генеральне.",
    ],
  },
  "article-remont-days": {
    title: "Через скільки днів після ремонту можна замовляти прибирання",
    serviceId: "remont",
    body: [
      "Оптимальний час виклику клінерів впливає і на якість результату, і на вартість.",
      "## Чому не варто прибирати одразу в день завершення робіт",
      "Будівельний пил ще кілька днів «осідає» з повітря на щойно очищені поверхні. Якщо прибрати одразу, частина пилу з повітря знову ляже на підлогу й меблі протягом наступної доби — доведеться повторювати роботу.",
      "## Оптимальний термін",
      "1-2 дні після завершення всіх «брудних» етапів ремонту (шпаклювання, фарбування, укладання підлоги) — оптимальний час для виклику. Пил встигає значною мірою осісти, а свіжі поверхні (фарба, лак) вже достатньо просохли, щоб їх можна було безпечно протирати.",
      "## Якщо потрібно терміново",
      "Якщо квартиру треба здати чи заселитись раніше — прибирання можна замовити і в день завершення робіт, просто попередьте про це заздалегідь: у такому разі рекомендуємо повторне вологе прибирання підлоги через кілька днів власними силами, щоб зняти пил, який ще осяде.",
    ],
  },
  "article-ofis-outsource": {
    title: "Аутсорсинг клінінгу vs штатний прибиральник — що вигідніше бізнесу",
    serviceId: "ofis",
    body: [
      "Питання, яке рано чи пізно постає перед кожним бізнесом з власним офісом чи торговою точкою.",
      "## Витрати на штатного прибиральника",
      "Крім зарплати — податки й нарахування на неї, оплата лікарняних і відпустки, потреба закуповувати й зберігати інвентар та хімію, а також витрати часу на пошук заміни, якщо людина звільняється чи хворіє.",
      "## Витрати на аутсорсинг клінінгу",
      "Фіксована сума за контрактом, без прихованих витрат на податки чи заміну персоналу. Бригада приїжджає з власним обладнанням і хімією — не потрібно нічого закуповувати чи зберігати на об'єкті.",
      "## Коли штатний прибиральник виправданий",
      "Для дуже великих об'єктів з щоденною потребою в прибиранні протягом усього робочого дня (наприклад, великий торговий центр) штатна людина може бути логічнішим рішенням. Для більшості офісів і невеликих комерційних приміщень аутсорсинг виходить економічнішим і без організаційного клопоту.",
    ],
  },
  "article-ofis-frequency": {
    title: "Як часто потрібно прибирати офіс",
    serviceId: "ofis",
    body: [
      "Частота залежить від типу офісу й кількості людей, які ним користуються щодня.",
      "## Щоденне прибирання",
      "Для офісів з великою прохідністю (опен-спейси, приймальні, магазини) — прибирання підлоги, сміття і санвузлів щодня є практичним мінімумом для комфорту й гігієни.",
      "## Кілька разів на тиждень",
      "Для невеликих команд (до 10-15 людей) часто достатньо прибирання 2-3 рази на тиждень, з щоденним лише винесенням сміття власними силами команди.",
      "## Глибоке (генеральне) прибирання окремо",
      "Незалежно від частоти підтримуючого прибирання, раз на 1-3 місяці варто додавати глибше чищення — килимові покриття, вікна, важкодоступні зони, які щоденний клінінг не охоплює.",
    ],
  },
  "article-mebli-frequency": {
    title: "Як часто варто робити хімчистку м'яких меблів",
    serviceId: "mebli",
    body: [
      "На відміну від прибирання квартири, хімчистка меблів рідше потребується «за розкладом» — частіше за станом.",
      "## Профілактична хімчистка",
      "Навіть без видимих плям рекомендуємо хімчистку раз на 6-12 місяців — пил, шерсть тварин та алергени накопичуються всередині оббивки, а не тільки на поверхні, і це впливає на якість повітря в приміщенні.",
      "## Коли потрібно частіше",
      "Домашні тварини, маленькі діти, курці в приміщенні — усе це скорочує рекомендований інтервал приблизно вдвічі, до 3-6 місяців.",
      "## Позапланова хімчистка",
      "Свіжі плями варто обробляти одразу, не чекаючи планового циклу — чим довше пляма «сидить» в тканині, тим складніше і дорожче її вивести.",
    ],
  },
  "article-mebli-carpet-choice": {
    title: "Хімчистка килима вдома чи в компанії — що обрати",
    serviceId: "mebli",
    body: [
      "Для килимів існує два підходи — виклик майстра додому чи здача килима в спеціалізовану пральню. У кожного свої переваги.",
      "## Хімчистка вдома (на місці)",
      "Килим не потрібно нікуди везти, немає простою кілька днів без килима в квартирі. Підходить для більшості побутових забруднень — пил, побутові плями, легкий запах.",
      "## Здача в пральню килимів",
      "Дає глибше очищення за рахунок повного занурення у воду й механічної обробки, яку неможливо відтворити на місці. Виправдана для дуже забруднених килимів, після затоплення, чи для делікатних виробів (шовк, ручна робота), які вимагають спеціальних умов сушіння.",
      "## Як обрати",
      "Для щорічної профілактики й типових побутових забруднень — хімчистка на місці цілком достатня і значно зручніша. Для складних випадків (плями від фарби, тривала пляма від тваринної сечі, що просякла вглиб) варто розглянути пральню.",
    ],
  },
  "article-remont-price": {
    title: "Скільки коштує прибирання після ремонту 1-кімнатної квартири",
    serviceId: "remont",
    body: [
      "Прибирання після ремонту — це не те саме, що звичайне генеральне прибирання, і саме тому воно коштує дорожче за однакову площу.",
      "Різниця відчутна вже на старті. У звичайній квартирі бруд лежить на поверхні: пил, жирові плівки, вапняний наліт. Після ремонту бруд — це будівельний пил, який осів не тільки на підлозі, а всередині шаф, під плінтусами, у щілинах вікон, навіть у патронах світильників. Частина цього пилу піднімається в повітря знову протягом кількох годин після прибирання — тому професійне прибирання після ремонту завжди передбачає повторне вологе миття підлоги, а не одноразовий прохід.",
      "## Скільки в середньому коштує 1-кімнатна квартира після ремонту",
      "Для квартири площею 35–45 м² прибирання після ремонту зазвичай виходить дорожчим за таку саму площу при звичайному генеральному прибиранні — приблизно на 20-40%. Причина не в жадібності клінінгової компанії, а в реальному обсязі роботи: зняття захисної плівки й малярського скотчу, видалення слідів клею та монтажної піни, чищення сантехніки від розчину, вимивання будівельного пилу зі стель — усе це додаткові години роботи, яких немає в звичайному прибиранні.",
      "Остаточна вартість завжди залежить від масштабу ремонту (косметичний чи капітальний), кількості будівельного сміття, яке лишилось у квартирі, і того, чи знімали ви захисну плівку самостійно, чи це теж входить у роботу клінерів.",
      "## Чому не можна сказати точну ціну заочно",
      "Дві однокімнатні квартири після ремонту можуть виглядати зовсім по-різному. В одній прибиральники приберуть за 4-5 годин, в іншій — за 8, якщо будівельники залишили плитковий клей на підлозі чи фарбу на підвіконні. Тому ми завжди називаємо орієнтовну вартість за площею й типом ремонту, а фінальну суму підтверджуємо після огляду.",
      "## Що варто зробити перед викликом клінерів",
      "Якщо є можливість — виведіть з квартири будівельне сміття у мішках (сам клінінг забирає сміття з підлоги, але не вивозить мішки з будинку). Це трохи скоротить час роботи бригади й, відповідно, вартість.",
    ],
  },
  "article-ofis-price": {
    title: "Скільки коштує клінінг офісу в Миколаєві",
    serviceId: "ofis",
    body: [
      "Вартість клінінгу офісу рахується інакше, ніж прибирання квартири, — і плутанина в цьому питанні виникає найчастіше саме через різницю в підходах до ціноутворення.",
      "## Разове прибирання чи контракт на обслуговування",
      "Перше, що визначає ціну, — чи це одноразовий виїзд, чи регулярний контракт (щодня, кілька разів на тиждень, раз на тиждень). Регулярне обслуговування завжди виходить дешевшим у перерахунку на один виїзд, бо не потрібне глибоке прибирання щоразу — досить підтримуючого клінінгу з періодичним глибшим циклом.",
      "## Що впливає на вартість",
      "Площа офісу та кількість робочих місць, тип покриття підлоги (килимове покриття вимагає більше часу, ніж кахель чи ламінат), наявність кухні для персоналу та кількість санвузлів, а також графік: прибирання в робочий час дешевше не буде, бо потрібно підлаштовуватись під команду, не заважаючи їй.",
      "## Чому клінінг офісу — це не «та сама квартира, тільки більша»",
      "В офісі інша логіка забруднення: менше кухонного жиру, але більше пилу від оргтехніки, паперу, килимових покриттів, які збирають бруд із взуття цілого дня. Санвузли з великою прохідністю потребують частішої дезінфекції, ніж домашні. Тому пряме порівняння «ціна за квадратний метр як у квартирі» не працює коректно.",
      "## Як формується фінальна пропозиція",
      "Для офісів ми зазвичай виїжджаємо на оцінку об'єкта перед тим, як озвучити фінальну вартість контракту — це дозволяє врахувати реальний стан приміщення, кількість співробітників і побажання щодо графіка.",
    ],
  },
  "article-mebli-price": {
    title: "Скільки коштує хімчистка дивана в Миколаєві",
    serviceId: "mebli",
    body: [
      "Хімчистка дивана — та послуга, де питання «скільки коштує» має чи не найбільше правильних відповідей одночасно, і жодна з них не буде точною без огляду.",
      "## Чому неможливо назвати фіксовану ціну наперед",
      "Два дивани однакового розміру можуть відрізнятись за вартістю чищення в рази. Тип тканини впливає напряму: одні тканини чистяться стандартним парогенератором, інші вимагають сухого методу чи спеціальних засобів. Ступінь і тип забруднення теж важливі — пил чиститься простіше, ніж давні плями від їжі, тваринної шерсті чи запахів. І конструкція дивана: кутовий диван зі знімними подушками вимагає більше часу, ніж прямий диван без трансформації.",
      "## Що входить у вартість",
      "Стандартна хімчистка включає обробку плям окремим засобом до основного циклу, глибоке чищення оббивки парогенератором чи екстрактором, чищення важкодоступних місць (шви, підлокітники, ніжки), дезінфекцію та усунення запахів. Сушіння зазвичай займає 4-8 годин після завершення роботи.",
      "## Як ми називаємо ціну",
      "Оскільки формула «ціна за метр оббивки» тут працює гірше, ніж для прибирання квартири, ми просимо фото меблів перед тим, як назвати орієнтовну вартість, а фінальну суму підтверджуємо на місці. Це не спосіб уникнути відповіді, а єдиний чесний спосіб не помилитись ані в більшу, ані в меншу сторону.",
      "## Коли варто замовляти хімчистку, а не чекати генерального прибирання",
      "Свіжі плями видаляються значно легше за давні — якщо щось розлили на диван, немає сенсу чекати до запланованого прибирання. А для профілактики рекомендуємо хімчистку м'яких меблів раз на 6–12 місяців навіть без видимих плям.",
    ],
  },
};

export const ARTICLE_TITLE_TO_ROUTE = Object.fromEntries(
  Object.entries(ARTICLES_CONTENT).map(([route, a]) => [a.title, route])
);

export const ADDONS = [
  { id: "microwave", label: "Мікрохвильова піч", price: 250 },
  { id: "fridge", label: "Холодильник (всередині)", price: 700 },
  { id: "oven", label: "Духова шафа", price: 600 },
  { id: "hood", label: "Витяжка", price: 400 },
  { id: "washer", label: "Пральна машина", price: 300 },
  { id: "chandelier", label: "Кришталева люстра", price: 300 },
];

export const WINDOW_ADDON_RATE = 180;

export const MIN_ORDER = 2400;

export const FAQ = [
  { q: "Скільки часу займає прибирання?", a: "Для квартири 50–60 м² — орієнтовно 6–9 годин бригадою з 2-3 людей. Точний час залежить від ступеня забруднення." },
  { q: "Ви привозите свій інвентар та засоби?", a: "Так, повний комплект обладнання та професійної хімії включено у вартість — нічого готувати не потрібно." },
  { q: "Чому фінальна ціна визначається на місці, а не заздалегідь?", a: "Орієнтовну вартість калькулятор рахує одразу за вашою оцінкою забруднення. Але остаточну суму майстер підтверджує під час огляду — це чесніше і для нас, і для вас: буває, що приміщення виявляється чистішим або складнішим, ніж здається на відстані." },
  { q: "Чи можна замовити прибирання на конкретний день?", a: "Постараємось підлаштуватись під ваш графік. У більшості районів виїжджаємо протягом 1–2 днів з моменту заявки, іноді можливо й того самого дня — залежить від завантаженості бригад." },
  { q: "Чи потрібно бути вдома під час прибирання?", a: "Ні, можна залишити ключі довіреній особі чи домовитись про інший спосіб доступу. Після завершення роботи повідомимо і за бажанням надішлемо фото результату." },
  { q: "Хто виконує прибирання — штатні клінери чи підрядники?", a: "Працюють тільки перевірені виконавці команди «чисто.», з якими є прямий постійний контакт — не випадкові підрядники з біржі." },
  { q: "Чи можна замовити лише окремі роботи (наприклад, тільки кухню чи тільки санвузол)?", a: "Так, можемо погодити прибирання окремої зони як частину загального чек-листа — вартість перераховується під менший обсяг." },
  { q: "Що робити, якщо результат не влаштує?", a: "Скажіть про це протягом доби після виїзду — виправимо зауваження безкоштовно, без додаткової оплати за повторний виїзд." },
  { q: "Чи працюєте у вихідні та святкові дні?", a: "Так, приймаємо заявки без вихідних. У передсвяткові дні попит вищий, тому краще бронювати заздалегідь." },
  { q: "Чи можна замовити клінінг у Миколаєві онлайн, без дзвінка?", a: "Так, замовити прибирання квартири чи іншу послугу можна повністю онлайн — через калькулятор на сайті або форму заявки. Дзвінок знадобиться лише для підтвердження деталей." },
  { q: "Шукаєте нас за запитом «клининг николаев» чи «уборка квартир»?", a: "Так, це саме той сайт — «чисто.» знайдуть за запитами «клининг николаев», «заказать клининг» чи «убрать квартиру Николаев» так само, як і українською. Спілкуємось і приймаємо заявки обома мовами." },
  { q: "Скільки часу ви на ринку?", a: "Офіційно як ФОП працюємо майже 2 роки, а практичний досвід у клінінгу — понад 5 років. Саме тому чек-листи на сайті настільки детальні: вони складені на основі реальної, а не теоретичної роботи." },
];

export const CATEGORY_META = {
  home: { emoji: "\ud83c\udfe0", label: "Догляд за домом та лайфхаки", color: "#7FB8A6" },
  expert: { emoji: "\ud83d\udd2c", label: "Експертний клінінг", color: "#1B4550" },
  backstage: { emoji: "\ud83c\udfa5", label: "Закулісся роботи компанії", color: "#D9AE28" },
};

export const WORK_PHOTOS = {
  vikna: [
    { src: "/vikna-1.webp", alt: "Миття вікон у Миколаєві — бригада «чисто.» за роботою, вітринне скло" },
    { src: "/vikna-2.webp", alt: "Миття вікон висотних будівель у Миколаєві — промисловий альпінізм, вид на місто" },
  ],
  mebli: [
    { src: "/mebli-1.webp", alt: "Хімчистка дивана в Миколаєві — глибоке очищення оббивки парогенератором" },
  ],
  generalne: [
    { src: "/generalne-1.webp", alt: "Генеральне прибирання квартири в Миколаєві — вітальня після прибирання, чисті вікна, меблі та килим" },
  ],
  remont: [
    { src: "/remont-1.webp", alt: "Прибирання після ремонту в Миколаєві — санвузол і коридор до і після" },
  ],
};

export const CERT_PREVIEWS = [
  { src: "/cert-1.webp", alt: "Приклад подарункового сертифіката на генеральне прибирання «чисто.», 8000 грн" },
  { src: "/cert-2.webp", alt: "Подарунковий сертифікат «чисто.» — зворотний бік із переліком робіт з прибирання" },
  { src: "/cert-3.webp", alt: "Приклад подарункового сертифіката на генеральне прибирання «чисто.», 7000 грн" },
];


export function rateForLevel(service, level) {
  const step = (service.rateMax - service.rateMin) / 4;
  return Math.round(service.rateMin + step * (level - 1));
}

export function detailsFor(serviceId) {
  return SERVICE_DETAILS[serviceId] || {
    intro: "Працюємо за чіткими стандартами якості — деталі уточнимо під час огляду об'єкта.",
    checklist: [], lifehacks: [], articles: [],
    faqExtra: { q: "Стаття в розробці — розділ поповнюється", a: "" },
  };
}
