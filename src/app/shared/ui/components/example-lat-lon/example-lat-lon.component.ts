import { Component } from '@angular/core';

interface ICoordData {
  lat: number;
  lon: number;
}
@Component({
  selector: 'app-example-lat-lon',
  standalone: true,
  imports: [],
  template: `<p>example-lat-lon works!</p>`,
  styleUrl: './example-lat-lon.component.scss',
})
export class ExampleLatLonComponent {
  constructor() {
    this.getLocation();
  }

  async getLocation() {
    console.log(navigator);
    if (window.navigator && window.navigator.permissions) {
      const permission = await navigator.permissions.query({
        name: 'geolocation',
      });
      if (permission.state !== 'denied') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log('position: ', position);
              const distance = this.getDistanceFromLatLonInKm(
                {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
                },
                { lat: -22, lon: -49.8828889 },
              );
              console.log(`Distância de ${distance}Km`);
            }
          },
          () => {},
        );
      }
    }
  }

  private getDistanceFromLatLonInKm(data1: ICoordData, data2: ICoordData) {
    var R = 6378; // Radius of the earth in km
    var dLat = this.deg2rad(data2.lat - data1.lat); // deg2rad below
    var dLon = this.deg2rad(data2.lon - data1.lon);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(data1.lat)) *
        Math.cos(this.deg2rad(data2.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d.toFixed(2);
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
