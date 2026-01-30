import { useEffect, useState, useRef } from "react";
import React from "react";
import "./comments.css"

const Comments = ({ item }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const inputRef = useRef(null);

  
    useEffect(() => {
      const fetchComments = async () => {
        setIsLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();
        const filteredComments = data.filter((comment, index) =>
          item.comments.includes(index + 1)
        );
        setComments(filteredComments);
        setIsLoading(false);
      };
  
      if (item) {
        fetchComments();
      }
    }, [item]);
  
    if (!item) {
      return null;
    }
  
    return (

        <>
        <div className="ui-pdp-container__row">
        <div className="ui-pdp-container__col col-3">
          <div className="ui-pdp-container__row">
            <div className="ui-pdp-container__col col-1 ui-pdp-with--separator ui-pdp-with--separator--40">
              <div className="ui-pdp-qadb pl-45 pr-45 mb-48">
                <h2 className="ui-pdp-qadb__title">Preguntas y respuestas</h2>
                <div className="ui-pdp-quick-access__container">
                  <h3 className="ui-pdp-questions__subtitle">¿Qué querés saber?</h3>
                  <div className="ui-pdp-questions__list-container">
                    <ul className="ui-pdp-questions__list">
                      <li className="ui-pdp-questions__item">
                        <div className="ui-pdp-action-modal">
                          <div className="andes-tooltip__trigger">
                            <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Costo y tiempo de envío</a>
                          </div>
                        </div>
                      </li>
                      <li className="ui-pdp-questions__item">
                        <div className="ui-pdp-action-modal">
                          <div className="andes-tooltip__trigger">
                            <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Devoluciones gratis</a>
                          </div>
                        </div>
                      </li>
                      <li className="ui-pdp-questions__item">
                        <div className="ui-pdp-action-modal">
                          <div className="andes-tooltip__trigger">
                            <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Medios de pago y promociones</a>
                          </div>
                        </div>
                      </li>
                      <li className="ui-pdp-questions__item">
                        <div className="ui-pdp-action-modal">
                          <div className="andes-tooltip__trigger">
                            <a href="" className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link">Garantía</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ui-pdp-qadb__search-bar">
                  <h3 className="ui-pdp-color--BLACK ui-pdp-size--MEDIUM ui-pdp-family--SEMIBOLD ui-pdp-search-bar__title">Buscá lo que querés saber</h3>
                  <form action="" className="">
                    <div className="ui-pdp-qadb__search-bar__input-container">
                      <div className="andes-form-control andes-form-control--textfield andes-form-control--default ui-pdp-qadb__search-bar__input">
                        <label htmlFor="" style={{width: "100%"}} >
                          <div className="andes-form-control__control">
                            <input ref={inputRef} type="text" className="andes-form-control__field" placeholder="Escribí una pregunta o palabra clave..." />
                          </div>
                        </label>
                        <div className="andes-form-control__bottom">
                          <span className="andes-form-control__message"></span>
                        </div>
                      </div>
                      <button className="ui-pdp-qadb__search-bar__search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#eee" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="ui-pdp-qadb__questions-list">
                  <h3 className="ui-pdp-color--BLACK ui-pdp-size--MEDIUM ui-pdp-family--SEMIBOLD ui-pdp-qadb__questions-list__title">
                  Últimas realizadas
                  </h3>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <>
            <div className="ui-pdp-qadb__questions-list__wraper">
            <div className={`ui-pdp-qadb__questions-list__question" id="comentsListContainer ${showComments ? 'show' : ''}`}>
                    {comments.map((comment, index)=>(
                        <div className="commentsList" style={{display: index === 0 ? "block" : showComments? "block": "none" }} >
                            <div className="ui-pdp-qadb__questions-list__question__container">
                                <span className="ui-pdp-color--BLACK ui-pdp-size--SMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__question__label"> {comment.body} </span>
                                <a href="" className="ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__question-item__denounce">Denunciar</a>
                            </div>
                            <div className="ui-pdp-qadb__questions-list__question__answer-container">
                                <div>
                                    <div className="ui-pdp-qadb__questions-list__container-answer__isNoCollapsed">
                                        <span className="ui-pdp-color--GRAY ui-pdp-size--SMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__answer-item__answer"> {comment.name} </span>
                                        <a href="" className="ui-pdp-size--XSMALL ui-pdp-family--REGULAR ui-pdp-qadb__questions-list__question-item__denounce">Denunciar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="andes-button ui-pdp-qadb__questions-list__see-more andes-button--large andes-button--transparent" onClick={() => {
                    if(showComments){
                        inputRef.current.focus()
                    } else{
                        setShowComments(true)
                    }
                }}>
                <span className="andes-button__content">
                    <p className="ui-pdp-color--BLUE ui-pdp-size--SMALL ui-pdp-family--SEMIBOLD ui-pdp-qadb__questions-list__see-more__link">
                        {showComments?
                        `Buscar entre ${comments.length} preguntas de esta publicación`
                        :
                        "Ver 7 resultados más"
                    }
                    </p>
                </span>
                </button>
                </div>
            
            </>
        )}
                </div>
                <button className="andes-button ui-pdp-qadb__questions-list__see-more andes-button--large andes-button--transparent">
                        <span className="andes-button__content">
                          <span className="andes-button__text">¿Cómo le pregunto al vendedor?</span>
                        </span>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="ui-pdp-container__row"></div>
        </div>
      </div>       
        
        </>
    );
  };
  
  export default Comments;
  