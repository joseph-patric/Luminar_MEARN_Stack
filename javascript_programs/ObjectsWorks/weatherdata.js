var weather=[
{dist_name:"tsr", temp:25},
{dist_name:"tvm", temp:26},
{dist_name:"ekm", temp:29},
{dist_name:"idk", temp:15},
{dist_name:"pkd", temp:30},
{dist_name:"mpm", temp:29},
{dist_name:"tsr", temp:27},
{dist_name:"tvm", temp:23},
{dist_name:"ekm", temp:31},
{dist_name:"idk", temp:17},
{dist_name:"pkd", temp:27},
{dist_name:"mpm", temp:25}
]

// districts and their highest temperature Format (key:temperature)

var max_temp={}

for (data of weather){
    if(!(data.dist_name in max_temp)){
        max_temp[data.dist_name]=data.temp;
    }
    else{
        if (data.temp>max_temp[data.dist_name]){
            max_temp[data.dist_name]=data.temp;
        }
    }
}

// console.log(max_temp);

// sort the result with temperature

// We have to convert the object to a nested array - use Object.entries()

// { tsr: 27, tvm: 26, ekm: 31, idk: 17, pkd: 30, mpm: 29 } ===> 
// [[ 'tsr', 27 ],[ 'tvm', 26 ],[ 'ekm', 31 ],[ 'idk', 17 ],[ 'pkd', 30 ],[ 'mpm', 29 ]]

Object.entries(max_temp).sort((o1,o2)=>o1[1]-o2[1]).forEach(data=>console.log(data))

// console.log(weather.filter(dist=>dist.dist_name=="tsr").reduce((t1,t2)=>t1>t2?t1:t2));  