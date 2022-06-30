import React from 'react';
import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
function Map(props) {
  return (
    <RenderAfterNavermapsLoaded ncpClientId={'o5qutimret'}>
      <NaverMap
        mapDivId="map"
        style={{
          width: '100%',
          height: '400px',
        }}
        defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
        defaultZoom={16}
        zoomControl={true} // 지도 zoom 허용
      />
    </RenderAfterNavermapsLoaded>
  );
  // 지도를 표시할 영역 생성
}
export default Map;
