interface TMapUrlParams {
  key: string,
  v?: string,
  callback?: string,
}

const _loadTMapScript = (param?: string | TMapUrlParams): void => {

  const url: string = 'https://map.qq.com/api/gljs'

  const scriptEl = document.createElement('script')
  scriptEl.id = 'TMapScript'
  scriptEl.type = "text/javascript"

  let params: TMapUrlParams = {
    key: import.meta.env.VITE_TMAP_KEY as string,
    v: '1.exp',
    callback: 'initMap'
  }

  if (typeof param === 'string') {
    params.key = param
  } else if (typeof param === 'object') {
    params = { ...param, ...params }
  }

  let src = url + '?'
  Object.entries(params).forEach(item => {
    src += `${item[0]}=${item[1]}&`
  })

  scriptEl.src = src
  document.body.appendChild(scriptEl)
}

const initMap = (container: HTMLElement | null, loc: number[], config: Object = {}): any => {
  const center = new window.TMap.LatLng(loc[0], loc[1])
  const map = new window.TMap.Map(container, {
    center,
    showControl: false,
    ...config
  })
  return map
}

const AsyncinitMap = (container: HTMLElement | null, loc: number[], config: Object = {}, callback?: any): void => {
  window.initMap = () => {
    const map = initMap(container, loc, config)
    callback(map)
  }
  if (document.querySelector('script#TMapScript')) {
    const map = initMap(container, loc, config)
    callback(map)
  }
  else _loadTMapScript()
}


function setMapMarkers(this: any, dots: number[][] | [{ [key: string]: any }], styles?: Object): void {
  const markerLayer = new window.TMap.MultiMarker({
    map: this,
    styles: styles || {
      //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
      "myStyle": new window.TMap.MarkerStyle({
        "width": 18,  // 点标记样式宽度（像素）
        "height": 30, // 点标记样式高度（像素）
        "src": '../img/map-marker.png',  //图片路径
        //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
        "anchor": { x: 16, y: 32 }
      })
    },
    geometries: dots[0] instanceof Array && dots[0].length ? dots.map((value: any, index: number) => {
      return {
        id: index,
        styleId: "myStyle",
        position: new window.TMap.LatLng(value[0], value[1]),  //点标记坐标位置
        properties: {
          title: ''
        }
      }
    }) : styles
  })
  return markerLayer
}

window.TMap.Map.prototype.setMarkers = setMapMarkers

export { initMap, AsyncinitMap, setMapMarkers }
