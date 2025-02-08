import  express from "express"
import { addHero } from "../Controllers/heros/addHero";
import { deleteHero } from "../Controllers/heros/deleteHero";
import { fetchHeros } from "../Controllers/heros/fetchHeros";
import { fetchMyHeros } from "../Controllers/heros/fetchMyHeros";
import { filterByRating } from "../Controllers/heros/filterByRating";
import { rateHero } from "../Controllers/heros/rateHero";


const router = express.Router()

router.get(`/fetch-heros`,fetchHeros );
router.get(`/fetch-my-heros`,fetchMyHeros );
router.post(`/add-hero`,addHero );
router.delete(`/delete:id`,deleteHero );
router.put(`/:id/rate`,rateHero );
router.get(`filter/:rating`,filterByRating)

export default router;