interface Mappable {
   location: {
    lat: number;
    lng: number;
   };
}
 export class CustomMap {
  private googleMaps: google.maps.Map;
  constructor(divid: string) {
    this.googleMaps = new google.maps.Map(document.getElementById(divid) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0, 
        lng: 0 
      }
    });
  }
  addMarker(mappable: Mappable):void {
    new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
 }