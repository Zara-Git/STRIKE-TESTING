import { http, HttpResponse } from 'msw';

const ERROR = { Response: 'False', Error: 'Unsuccesful' };

const bookingData = 
  {
    when: '2024-05-27T12:00',
    lanes: '1',
    people: '2',
    shoes: ['45', '41'],
    price: '340',
    id: 'STR7032TPJH',
    active: true,
  }


// Definiera dina hanterare
export const handlers = [
  http.get(
    'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com',
    ({ request }) => {
      return HttpResponse.json({
        Apikey: '738c6b9d-24cf-47c3-b688-f4f4c5747662',
      });
    }
  ),

  http.post(
    'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com',

    async ({ request }) => {
      const apikey = request.headers.get('x-api-key');
      const res = new Response(request.body);
      const data = await res.json();
      if (apikey === '738c6b9d-24cf-47c3-b688-f4f4c5747662') {
        return HttpResponse.json({
          ...data,
          id: 'STR7032TPJH',
          active: true,
          price: '340',
        });
      }
      return HttpResponse.json({
        success: false,
        message: 'ERROR',
      });
    }
  ),
];
