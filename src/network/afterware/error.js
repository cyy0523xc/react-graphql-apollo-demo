export default {
    applyAfterware({ response }, next) {
        console.log("in afterware")
        if (response.status !== 200) {
            console.log("error")
        }
        next();
    }
}
