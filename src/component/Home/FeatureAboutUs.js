import React from 'react'
import orderTop from "../../images/order-top.png"
import feature1 from "../../images/order-3.png"
import feature2 from "../../images/order-2.png"
import feature3 from "../../images/order-3.png"
import orderBottom from "../../images/order-bottom.png"


const FeatureAboutUs = () => {
  return (
    <>
        <div dir='ltr' className="order-feature">
        <div className="order-top">
        <img src={orderTop} className='img-fluid' alt="top"  />
    </div>
    <div className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="fea-img">
                        <img src={feature1} className='img-fluid' alt="features" />
                    </div>
                    <div className="fea-text mt-2">
                        <h2 className='mb-3'>اطلب طعامك</h2>
                        <p>قم بتقديم طلب الوجبة التي ترغب في تناولها من القائمة المتاحة في المطعم، يمكنك اختيار الأطعمة التي تلبي رغبتك وشهيتك، ولا تتردد في ذكر أي تفضيلات خاصة بك مثل درجة النضج أو الإضافات المختلفة. بعد تقديم طلبك، سيقوم الموظف بإعداد الوجبة وتقديمها لك لتستمتع بتناول طعام لذيذ ومرضي.
</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="fea-img">
                        <img src={feature2} className='img-fluid' alt="features" />
                    </div>
                    <div className="fea-text mt-2">
                        <h2 className='mb-3'>التسليم أو الاستلام</h2>
                        <p>قم بتقديم طلب الوجبة التي ترغب في تناولها من القائمة المتاحة في المطعم، يمكنك اختيار الأطعمة التي تلبي رغبتك وشهيتك، ولا تتردد في ذكر أي تفضيلات خاصة بك مثل درجة النضج أو الإضافات المختلفة.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="fea-img">
                        <img src={feature3} className='img-fluid' alt="features" />
                    </div>
                    <div className="fea-text mt-2">
                        <h2 className='mb-3'>وصفة لذيذة</h2>
                        <p>
تحتوي قائمة الطعام على مجموعة متنوعة من الوصفات الشهية التي تجعل اختيار الطعام أمرًا ممتعًا وصعبًا في الوقت نفسه. تشمل هذه الوصفات مجموعة من النكهات والمكونات المختلفة التي تناسب مختلف الأذواق. سواء كنت من محبي المأكولات البحرية، أو اللحوم الشهية، أو الأطباق النباتية اللذيذة، فإن هذه القائمة تقدم لك خيارات لا حصر لها. استمتع بتجربة تذوق مذهلة من خلال تلك الوصفات المبتكرة التي تجمع بين النكهات المختلفة لتقديم وجبة لا تُنسى.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="order-bottom mb-5">
        <img src={orderBottom} className='img-fluid' alt="top"  />
    </div>
        </div>
    </>
  )
}

export default FeatureAboutUs
