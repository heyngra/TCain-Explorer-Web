function str2seed(seed){
    if(seed.length != 9)
        return 0
    //"xxxx xxxx"
    if(seed[4] != ' '){
        return 0
    }

    let dict = []
    for(let i=0;i<255;i++){
        dict[i] = 0xFF
    }
    for(let i=0;i<32;i++){
        dict["ABCDEFGHJKLMNPQRSTWXYZ01234V6789".charCodeAt(i)]=i
    }

    let num_seed = []
    for(let i=0;i<9;i++){
        if(i == 4)
            continue
        let j = i
        if(i > 4){
            j = i-1
        }
        num_seed[j] = dict[seed.charCodeAt(i)]
        if(num_seed[j] == 0xFF)
            return 0
    }

    let v8 = 0;
    let v10

    //num_seed[x] j is unsigned int8
    for (let j = ((num_seed[6] >>> 3) | (4
                                    * (num_seed[5] | (32
                                                    * (num_seed[4] | (32
                                                                    * (num_seed[3] | (32
                                                                                    * (num_seed[2] | (32 * (num_seed[1] | (32 * num_seed[0])))))))))))) ^ 0xFEF7FFD;
        j != 0;
        v8 = ((v10 >>> 7) + 2 * v10) & 0xFF)
    {
        v10 = ((j & 0xFF) + v8) & 0xFF;
        j >>>= 5;
    }
    if ( v8 == (num_seed[7] | (0xFF & (32 * num_seed[6])))){
        return ((num_seed[6] >> 3) | (4
            * (num_seed[5] | (32
                            * (num_seed[4] | (32
                                            * (num_seed[3] | (32
                                                                    * (num_seed[2] | (32 * (num_seed[1] | (32 * num_seed[0])))))))))))) ^ 0xFEF7FFD;
    }
    return 0
}
function send() {
    let seed = document.getElementById("seed").value;
    seed = seed.toUpperCase();
    console.log(seed.substring(0, 4) + " " + seed.substring(4, 8))
    console.log(str2seed(seed.substring(0, 4) + " " + seed.substring(4, 8)))
    console.log(str2seed(seed.substring(0, 4) + " " + seed.substring(4, 8)) != 0)
    if (str2seed(seed.substring(0, 4) + " " + seed.substring(4, 8)) != 0) {
    let coop = document.getElementById("coop").checked;
    let n = 0;
    if (coop) {let n=1} else {let n=0}
        window.location.href = "https://tcain.heyn.live/?data=" + seed + n;
    }
    else {
        window.alert("Invalid Seed");
    }
}