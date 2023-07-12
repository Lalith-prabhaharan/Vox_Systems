import React from 'react';
import "../style/clients.css"
const Agile = () => {
  return (
    <div className='agile'>

    {/* <div className='agility'>
      <img
        class='agility-image img-fluid'
        src="data:image/jpeg;base64,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" // Replace with the actual image URL
        alt="Agility and Scale"
        style={{ width: '200px', height: '200px' }}
      />
      <div className='agility-content'>
      <h2>Agility and Scale</h2>
      <p>
        Fast Delivery: Our platform enables fast and efficient delivery of your services or products, ensuring quick turnaround times for your customers.
      </p>
      <p>
        Reporting: Gain valuable insights into your operations with comprehensive reporting features, allowing you to track and monitor key metrics.
      </p>
      <p>
        Analytics: Leverage advanced analytics capabilities to extract actionable intelligence from your data, empowering data-driven decision-making.
      </p>
      </div>
    </div> */}

    <section id="features" class="features mt-5" style={{backgroundColor:'black'}}>




<div class="container">

  {/* <div class="row gy-4 align-items-center features-item">
    <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h3 className='text-white-50'>Our Vision</h3>
      <p>
      At Vox System, we envision a future where people can communicate and collaborate seamlessly and effortlessly through innovative technology solutions.
      </p>
      <a href="#" class="btn btn-get-started">Get Started</a>
    </div>
    <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
      <div class="image-stack">
        <img src="https://bootstrapmade.com/demo/templates/Append/assets/img/features-light-1.jpg" alt="" class="stack-front"/>
        <img src="" alt="" class="stack-back"/>
      </div>
    </div>
  </div>

  <div class="row gy-4 align-items-stretch justify-content-between features-item ">
    <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
      <img src="https://bootstrapmade.com/demo/templates/Append/assets/img/features-light-3.jpg" class="img-fluid" alt=""/>
    </div>
    <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
      <h3 className='text-white-50'>Our Mission</h3>
      <p>Our mission at Vox System is to empower businesses and individuals to connect and collaborate with ease through cutting-edge communication and collaboration tools. We are committed to delivering exceptional customer service and continually innovating and improving our products to meet their evolving needs.</p>
      
      <a href="#" class="btn btn-get-started align-self-start">Get Started</a>
    </div>
  </div> */}

  <div class="row gy-4 align-items-center features-item">
    <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h3 className='text-white-50'>Agility and Scale</h3>
      <p>
        <ul>

      <li>
        Fast Delivery: Our platform enables fast and efficient delivery of your services or products, ensuring quick turnaround times for your customers.
        </li>

      <li>
      Reporting: Gain valuable insights into your operations with comprehensive reporting features, allowing you to track and monitor key metrics.
        </li>

      <li>
      Analytics: Leverage advanced analytics capabilities to extract actionable intelligence from your data, empowering data-driven decision-making.
        </li>
        </ul>
      </p>
      <a href="#" class="btn btn-get-started">Get Started</a>
    </div>
    <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
      <div class="image-stack">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUQEhIVFRAXGBYWFxUXFxUVFhUVFhUWFxUVGBcYHSggGBomGxUVIjEiJSktLi4uFx8zODMsNygtLi0BCgoKDg0OGxAQGi0lICUtLS0tMC0tLS0tLS0tLTAtKy0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABEEAABAwEFBQUEBwYDCQAAAAABAAIRAwQFEiExBkFRYYETIjJxkVKhsdEHI0JiweHwFENygpKyFTPxFiQlNVODorPS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADERAAIBAgQDBgYCAwEAAAAAAAABAgMRBBIhMUFRcWGBkaHR8AUTIrHB4TLxI1OCwv/aAAwDAQACEQMRAD8A9vREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAF8JjMr6oi87b38A0GvmiON2JHt+CyD1EUrSultpAEkwOKNBSuSIcvsqu2i/j+7ZI4nf5D819sl51qjQ9jqbmzGjhnlln5hSysj8xPYsKKIui/GVyWaPBc3kXNMOAneOCl1xpp2ZKMlJXQREXDoREQBERAEREAREQBERAEREAREQBElJQBERAEREAWL3gLJQj7ZicT6eW5DjdiWFVRVuujE4vY6HEyQ7MEngdy3UrQtlW1tYJPQDUldV0cdmtSBqY6Zh7SD7j5Hesqc1nhknAILo9wWVovh9UtYAMD3FsYcWkSTiH3pyC+7OWhrqRfEFzojyA+asd0tdyiNm7LYwu692ENPYlrjWfSEkHusc1oeTGUhwMAdVr2MAbZSCdKjo/pYl3W6zQCwO/zqjQXiXSHhry07m+EDTIDJatkh/uxnUPP9rEmlwVup2Dd1d+HDY+sdRaxzqdXE9teoZ0h4LQ5oEZ4Q1on35q40Koe0OGhAPqqVZbuYASXtMVajiGkQC/CIdP2oaCebiqXS2otDHyC3I7pafUFXKg6reV7cymWIVG2ZWvy7P7PbEUBslff7XRk+ICeepBB5gjXfIU/Kyyi4uzNkJKUVJbBERcJBERAERJQBElJQBElEARElAESUQBERAEREARFi9+EElAZFVO02apR8Q7vtDMeu7qrE2tO9bA9dTsRlHMVqlaF3WdwnEczoOXP3rbbrrpEYmnA7lmD/Lu6LlpV2QSHB2e7MTABE9FJtMgk1uR133tTDGhlI08VSo0N/wC5BeTzkOjPXVY7Jw2ywdQ4x6NWmwWqz4G4JPfqNaXiXYscOI4CYjkAsdmMrNnqHH1gfJWVFv8Akqpt6X8uGxtsTaEA9oHkVKgB8Ix4gC0AaxhaJz4rVsuCbOZ1DiT/AEtWqy2Boglze7Ue6G6SS3Unf3QTzJXzZ4zQJ+8T7gu1OtyMNNLW9rc+WS7iNe4O1qPicU4i3PlJaTyxQvPKniPmfirgKxpnCXOk1aj8JkvcJbowZlsh0bohc1w7IVq9SajYbM4Z/uIyA95W6jNU80pv3qefXpuplUFr/W5aPoysrm0sR0IJ/qdI9zZ6q8Lmu+xNo0wxvU8TxXSvMqTzzcuZ7FGn8uCjyCLRarYyn4nAHhqT0UVXvhzsmDCOJ1+QUUiTkkTNWs1viIH64LmFuB0bl5ql3ptVRpTBNWpyOU83n8JVWtG2Vrc/E17WAaMa1pb1xAk+votNPCVJq+3X3cyVMdSg7Xv0927tz2ZlUH81mvN7m+kWmYbamYD/ANRoLmeZb4h0lXm77fTrMx0qjajOLSHDyMaHkqalKdP+S9PE0U60Kn8X76bneixD1kqy0IiIAiIgCIiAIiIAiIgC4b4fhpj+IfAruXNb7N2tMt0OoPMaIjktiJp2hddGvOShazKlIw9pHPUHyK6bHaPE4ZlrHuHmBkptFUZ62K/tXerqznUWOimDBI+2Qc5+7uhdWzhAs8HUE/gqTQvNlZsNdheYycYPQ71b7mqBtmLnkNDZkkgAdSrHBxWVlanGTzLlufLJTpBrT2geWveARAGLFEADUiAOkr7s6CaBJ1BJ9wXBdt3Vqwb2NKQHOIqOmnSzIIIcRiqaT3WkEk5qfujY3AwU69Z9Yalvgpnza3N/8xI5Kypa+svfdoV0lJpWj7+5WLK2SGUmOe5tR7i1kOAcS3N75wMkgmCZE6KaubZ61GmGVaoaHHMUxhJy0NQ8gfCB5q5ULDTpBjWtAaMgAAAMjkGgQF1vbIyMHcq5129kW08Oo7sh7t2coUBk0EnXmeLic3HzKlgWt7oEfdA/AaLgvS9qNnH11UA7mNze7oM+uSr1m24Y60NpClDHOAHeGPPLEQBHv6qltyfMvSjFaaFxa+TEEb84/A/qVmtVR4D2gkSZgZSfJbVwkVe8bKe1e4GZcct/kom97sNop9mHlhBnkeRG8KTvS3NbWcxxIMkg7tSPwOuSj73vqnZqYqvlzSQ0YYJzkzrpkVop51JOK14GOqqbi1LbiUe9blrUAS9ks9tveHU7usKIK9cslvY9ocDLHAEEaEEcFy2rZKyWg4w0sM59kQ0O5FsEDoAVthjv9i8PQwS+H/633P199TyqjQfVeKdNjnvOjWguJ6Beh7E7E2ihWbaa1XsiP3TDJeI8L3A4Y5Ceitt22GhZWYKTGsG+M3O/iccz1K3utRPILPWxcpq0VZeZsoYONO0pO78P2SBqALZTMiVFCopGyGWDr8SsRuubkREOhERAEREAREQBERAEREBi9oIgiQdxEhR4uprKgqU8uLDm0g6gcFJIhxq55navoqBqk07RgpEyGmnic0eyDiAMcVa7o2Rs1na2Q6o5uYdVOMg8WtPdZ5gTzVhWo1J8OfPcOc7+itnXqTVmyqFCnB3SMqQy5yfij/E3r+CiL42js1j7j3l1WJFJgxVDzI0aDxcQOao187ZWitk09gzPu0ziqmfaq6N8mj+YqEYSk7RVyc5xgs03ZdpfL5v6z2UgVH9/Xs296ocj9kaDm6BzVJvvbmq+W0/qWcBDqh83aM6eqqFS1EyBlOZ3kniScyea5SIzW+lgHvUfcvX08TzK3xNbU13v09fA6LRbnvJIynUySTzLjmSuShaDSeHtPfBkHcDxz1KVD+vyW1t21XAENyLwwaZvOjRzWy1Kkstkl9/UxKVWrLM2215eh9s9uqVbXSqVKjnv7Rnekk5Oav0GvABd1WzWuiyqwtdjYc94xN0IyPRe/lefjZJ5WuR6uBjlUk+Z51tQT27zHdkieHeM/gOqibdRFahRpGYdWAMEA5kgxiy9cldryoMdUdORxHPjmoS8rkbUp9mMhMiAMjxjTefVRpVY6J8CNWlL6muPr+jTcVOKFNvBoG72o/WakKPde3d/otdz2bsg2nvAaOBPeboJ+ErdWMFv63D9aDqoTacnYnBWijlvC9XglrYbBInUnrumCOPNTFOpkFAusBe8lxhpJiMzBM9OO9TlmoOdoIb7RyH59EqZVaxKm5cTcKimrAfq29fiVwULOxv3jxOnp81KUTLQf1qqWaYprczREUSQREQBERAEREAREQBEWsvzga7zuH574QGxa+0nwieeg9d/Rfez45/AdF9c6BJyA1KAx7OfEZ5bvTf1WxVe17dWFkgVe0IyIpgnTgTDT5gqGqfSO578NCyOqZ5jEcRHJrWmPVXxw1WSvl/H3M8sXRi7ZlfktX4K5VdoHn9rtWeZr1JO8hoaGjyAXBY7HVtFTsqFN1SpAJDRk0GQHOce6wZHMkTBiV239Rrdo+vUoPotrVKj2B4wuzLZBGvBS+wFS1uZWo2RtNjTUDqloqAuDCWNAYxo8bg0B0HIYjJzC20pulhrq178evZv0POrUo1sZlle1lt+9upA3HdrrS8U2eIhx03gOJ+C6KtzOwNcQ7vOLRkZLmxLYmZ7w/QKkvoxqNbXc926m6PMuA+Eqw3/AH/Z6YDSBLX9o1o1xyTi5ZkrNjauJ+fkoza20ST5O7bTfna1rbGnA0sKsN8ytBat6tvt0Svbl283qRNTY1n1ZLsIdTxVN7m1NcIB8x/SeIXy02uzWNpbimKgqsGrg5tMNn1xHqFB3rtJXrkhgLW795jmdygGAHE93eDROZPeJIAk6xnPSMplXUsHOy+bJ9L38yqpjKd7Uorra3kSVrvc2u2UXFsAPYBOcgvac17nU7gLphokmZIAA9V4FZf8+zyAH42kgAN7pczBIAAB8R8i3kv0Gq8YlHKlyNGCk5Rbe9/weX27big6sTTcXMJ9lwBknMEgGNNR0X3aC+6lOzCrRycXAd4A5Zzlwy9FxbUbJtFpc9r2sDiXFhBJJLiSWxkAZAHkvtoc1lKkakwyq1zwMLiGgnce6eGeWa5CeHlOMYNOXFX17NCNWniIKUqiajupJadrJy7rf21FlQtHeaCW6gEjODrqupzmESXlgaCe9mAAJPe3CBvUfcLfqWQO7hGmUDEIy0GvFV3bW9e82zMOQAdU8yAWs9IJ8wkaWaplRF1ctPMy+WN9HsxWa4OaRIe7JseR06rvFac15Xc9rLfqyZaZIHAnWPMe+F6PTfkPIKOIofLdiWGxCqxva3PqdwqKVsR+rHX4lQLHEmP171PWWmWsAOvzMrMzZFm5ERcJhERAEREAREQBERAFhS06u/uKzWFLQ+bviUBxXte9Gy0+0rPgbhq5x4NG8/DevLdoNpLTeL+wptc2kTDaTc3P5uI18tB0lSf0xkirZSPZrfGmo6pezrDYLO6zta2vaGvNSsRLwGECGzkPEOQjSTK9HDwjGCmleT2vsrX9OvI8vE1JTnKDlaK3tu9vXpzNlnuiyXYBWtpFa1RLLMwhwHAu3HzPd4By6av0hVow0aNOi3q49NB7lQqhc9xc4lziZLnEkk8STquumtUcPGWtT6n5dyMVTFSirUvpXZv3vctu19sfXsFjq1HYqjhXkwBMPYBkABoAqtZ73r0aT6VKqWMecT2t7uJ2ENkuHe0aBruCntpD/wANsPlaP/YxVJrS9wY0Fzjo0Alx6Bcp5Iwd7WUn92TnnlOOW93GO1+XYSN2VnsYMBLSQQY85y4HILG10iCCTM7+OZnrMrO7WY2NbMF2QjjJ5jP5rK86WBwbIy3A6ZmR5zIPmrczz2/G+nrw8b8M+VZM35215cNNdeeltTRY2uLwWgktOIAcRpPAaSTuXPZ6mBwOJzRxGp5aiAVJ2KhXqMLaQw05GN84GA8aj3GG5HSQDwJU1YNlabCO2Je/unBBaBM54ZD6rcvECxuepVdWtCF1Lw49/DzL6GHnOziu96L177EdY7tqVuwtcU6dnFQEwXue1rXjHUqENzHczceu8r1u8L3ZToiq0h+LwQQQ7nI1Co1pt9CzltM1GU3jIMEHDvk4WxTgnR0nm7VSt13Z247VoAokF+NulQ7yD9pxIzcZXzOOxuJbdOFJqV7QdrxcXxctrrVW6XPo8Jh6MVmc01b6lfW64W5PQh7XXNR7qjvE4yVzU3NDhjEsOTgRILTy3rYPCPILruuw1LTNFjRhxBzqh+xkR75OW+BovksM5yqqUL5r3XG73/t+J9TUUFTcZ/xtZ9Nva47E1ZLF2bg1oGHuhuEDu95sZZZQNxC17V7KWF8VqjnUamTZZH1kCO80iCYGuXNWShdop4MLiQ2BnqYGsqN2suepaWsdRLe0ZMB2hB1IOgPNfewqPOne3b78D4upSSg0o5uS9+O66kTdOz9kot7Wm51R4yxPiW5bmgADzz812UwN56fmsLnuutZqJ7d+Ko4zAMhoA0necypi6aDOyDi3E4lwjXQndp6pOcpNtyvrv2HKUIpJKOXS9u332mmz2Nz9BA4nT81M2elgaGzMLKkCBn/pyWSqNAREQBERAEREAREQBERAFrDoJB0nI7s93LP4rYiA8z+mFs1LN/DV+NNV2/RNjsI4Nq/3MVo+lezZ2d4Hd+tbyBOAjymD6KtXu2bLY+Qqf3NXrYdf46fV/wDo8PFStUq/8/eJBBizpLYGrr2fu82mu2n9nV54NGvU6eZW1tRV2efFOf0rcuNbZc2qwWUueWtote5zWwCRUh/iOTYA4b90LkZZG2V2AU3U6MCX0xiqTP7wkOcGxva15z+zEr0qz0wxgBgceHl+C469nokYezETOWUeXD4LwXUu3ft8z6ZUsqSXBLy0PIbtueuWd0tFOM6uJop4SZ8cwJBBwkg56KcsOz9NhhzS+oIOEtMNkT3qUtcRlk4uYPMLrv8AttmslocKbHurjWHGmO8Bk8tzeYjMQcolVe33jWrDA5wZSH7pgDGCeLR8XFeh/nqq7eVPxf5ffZHmXw1CWizSXel+F5sn7dflGhAxYntENbTIcWRIjtQA1gzOTW4p1JULSt9qttTsKMUmZlwZIhuUue7xHdpE8FGCmBED59Mvw/mVj2Gt9Ck2u2o9rKji0guIAc0B2QJMSCTlO9dVKFKN4q798NiLrzqySk7Ls9d7+7Gu17GUaVldUdWcH54JwgOIGfdiYnLXKFaNnr0dSuygxrcxTJLjoBLjkN6pu1V+sdLKb8bjkXAy0N4A7+isV2Md/htOASRZyYjdhcZ9DK89VcRUg5Vo5VmainvZXV314Lsvs0z0oU6EHGNKV3l+pra7s7LprfrzTRXm3/Zi0d8gwMsLpGXIQrn9G1ubWbXLQYDmDPKcnFeTWCzY6Voef3bGuHm6vSp/B7l6l9D1KLHVfvNYjo1jP/orOvguEwl6lPNdOyu7pX6JcOdy+PxbE4m1OeWzV9Fq9e1vjyLTelv7NzGj2ml54NkZLutMim6NcLs+hUda6DXWkBwlpExxgH5Live9LRQfhFDtbO/uh7SQ6nORDwAZA1ByyyOeueh8ypKqnbRtLuXpqX1ZQhGD8X1fvXhxO+3HuDjA+C57ktU/VOygnARzmQeO/wDULlua2Wi1VCalnFGzMkDESX1XDIEZCG75jPKDqpCrQa2uzCAJIJA0kFdxMp01DK1ur8dHpw6kaCjNybXB205a/ok5I1zHEa+ny9Fm1wOhXxzwMt/Df+SxAM4jllEfM/rfqtJA2IiIAiIgCIiAIiIAiIgCIiArW2NNlel+zEd7J4d7BEweciR5FUp101TZ+weIexxNN2rXg6tncczrG7mvRL3uw1D2jPFEEcY0jmo5lItycCPNaaVdwjZc79/vcxVsPGcsz5W6r3ty6aHmYu6tiDOzdiJjQx8o5r0XY3Z8WamHHN5gl3E7o+6N3qu+lZWE+EKUDgMyQBzyUsRi5VFl2I4XAwoyzXu/sbi3EIK0VbKRpn8VxW692gYKXeqHIEaAnLqfJTDXA6GQstmjcmnseQbXf8xr+Y4+y3y+IUNUMDgP1pl+uKl9tCf8QrRriEZSZwt05rbdexNqtAxvBptO8+J3kCfjC9tSjClFydtEfOOMp1pxgrvM+7VlYrWjhv4/Lf71KXTsjarUZwmm0/acDiPMN16mBzXpVy7HWezw7Dif7Rzd0P2f5QFZKdMNENAA5LHUx3Cmu9+h6NH4fxqvuXr76lPuLYKz0Ie8Y6gzl0Og8h4W+hI9pWivY2mk+m0AY2ub/UCJJ1Oq6kWGU5Sd5O56MIRgrRVkeB7O2RzmWyzkd/8AZ3mN4dRqU6hb/wCBC9C+iCpNiqN4VSR1Yz5KIuGyBt8W8RkKdoP9b2n4OK6/o4Y9t11nNmTV1GsBjMRHQlb8Q80Jf8vxR5+HWWUekl4P9ltvS1021WmZcBoM+K0f4kCIDfeoG1OiDu4rUy1DivmMTVjSqyj72PoMPSlUpxkWhlty09622f6yoN0Sd+fXcqy22c1MbO1HPqF32QCJ3SSMvio0ayqTjDtXkTqUZQi5Fja0DRfVzUrU11R1MHvNgnrr6Zeq6V7B5yYREQBERAEREAREQBERAEREByWyo5rstIXM+08QpJzQRBEhctW72nQke9dBE1ncFHV6RJzP4qfddR9oei+NuYfaeegj3qSlYg6ae5BWSmQ9uDxyI81cH0wc9/EZH1Wmy2NlLwtz4nMnquhRbuSSS2I6nddJlV1cU2mq7MvPi0gROXwXcKgOW/gcj71msXgRnEDPPdzRtvcJJbGSLVSnnhyidefPhrnqtq4dC4r0p13U4s9RlOpIzewvbG8QCI812oidnc41dWKNcNwWttvtNe0ingrUiwvpOIlziwDC095phpmd8RKsNw3PRsFLsaTnQ5xf33AmSGjKABENCmFFXuwyHa5DIajMweQ58lZKpKe/Z000RXClGG3b111YtN3MJJAwzw0PRRda56M5sHSR7gVtba6jftZcDn71pq29x1A96qnTjNWmk+quWxlKGsG10dvsYiz2enn2OI/ecSPQkhK18PIwsApt4N19d3RcVotZO4LiqvMKcKVOmvpil0RCpKrU/lLxZObN52g97MNJInN0/hMH0VqVM2TsDzWFeCKbQc/aJEQOIzVzSTuzsY5VYIiKJIIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC+ETkdF9RAa4I0MjgdfX5+q+ioNNDwP4cVmvjgCIOYQH1YveB8t5WJp8CR6H4gr6xgGn5nzO9AfIJ5DhvPXd0WTWACB+vPiskQHJXu6m/dB5Ze7RcVS4WnR5HQFTCLtwQX+zbd9R3QAfNdNnuKgzMtxH7xn3ae5SiJcHwCPJfURcAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q==" alt="" class="stack-front"/>
        <img src="" alt="" class="stack-back"/>
      </div>
    </div>
  </div>


</div>

</section>

    </div>
  );
};

export default Agile;
