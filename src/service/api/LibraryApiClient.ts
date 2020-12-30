import axios from 'axios';
import TrackData from "../../model/TrackData";
import PageableResponse from "./model/PageableResponse";

export class LibraryApiClient {

    async fetchUserFavoriteTracks(): Promise<TrackData[]> {
        let axiosResponse = await axios
            .get<PageableResponse<TrackData[]>>(
                "http://localhost:8081/library/deezer/favorites",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..7dt-fkSWd7F6vD_RyOydEg.7zjKiv6AjZh68XJPTWNsFgHdU14MA48plmPQBWa7FFKPFD6EhCtAs4DIQ2EXi-kkjjZGxYW3Ps0kE4UMavCJmf7Pg1OYv_Ee44oq_55BER7JPQpfcN5QRDow2Ogks6xwd-z0FwkQqbzMMlw5lvUSc10Xsbx3uAoDlnKVHCLBwbU8UHT04eqDOlKa3FoJR90xPFT_sILYUJ436UFccdUq1y4gfD-TnFy3p02HctuzbLIOruw6mVnOP0FTrxWvWATpSct23cUNZX0BvSuL86_o4ossvNBG3JXkuHbIqpCF3Z0sM__yCXdiCupBberpGAu_JvffcRYGindWpAnpwm1qYxu3LWUpaxY5zoVMY2zJ-gczeYH7zpEYmoU0D1FFr2YMQGaYPVtsNlVU2vjGUDmW7pix6cyH9XjQEhOPA8r2cA7tY0YiFZHoA-yWGl6_KvGKk3poPgaUQmS8Qf9qSj6OzU1yFBnsmZnnssP6sZbt0GSbG1VdAHtoAE_lh3bQDvPQEohy3zuMboPV9koQfnWBIRBD7TEf7WmRT41anxejzwFIGx1rZ31KqOoumj8a091z3l9ERbKF6bslHempnBYk7qQs091_bECvffyrAxcfYtn84Y0qr_KqFqfdXsdRwL3Pa1ygWvMvQNbikHDK9X6B9_TUsFZ5IgBHSqMxmgwrYwoKCWiKqHuLfwFv4Vq50wcVl3CPuxAv17ZhmmSJKOFEsw4kQOmLVQvHeJsopkA-X8aGIMFVUFLvRF0jKAvaIbjqtXmAwvGsvv4z7YagaqG8Tpz2L1bTBsGfFMsCChEtEb199CwF5V955swQfpdWPiwdJKYhdhuNx5f14dsVYPjheUj3DI0cHq2kmMHxQPxUqVrSuSNYPbWlYilkZUL0uqEK5rD9es1wB-Rxr_ysk3n65Ng1Dmw6B-r_LVFb2kdcJEIw40GDzsbth8_b6QtvUIoLTUs5yR4cAMJ4CxPsfBlMCh671O6bSeqs2tgWnIqonuFObHlj7uZJIleL_W4WlJ3gsGTHSRk39vxpCtBVLVAV3N_mtH1ujtB_Y5o0org3i36LJRh9i1GJbSP4UOLnueVAsAs5AbHQplPphDlbL6hy7G-8CHUOS4Cr7yLT2tcXJ1LG70R6gb1kL281oIPxj_Jh1nEzc5g7jX45o4i9yBiirfqdFuzUuyOPdi4Xvou4I9s.kRZ699X0bFYs5nhCoFymDA"
                    }
                }
            )
        return axiosResponse.data.data
    }
}

export type $LibraryApiClient = { libraryApiClient: LibraryApiClient }