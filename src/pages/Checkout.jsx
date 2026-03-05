import React, { useState } from 'react';
import ShippingSection from '../components/ShippingSection';

const InputField = ({ placeholder }) => (
  <input 
    type="text" 
    placeholder={placeholder}
    className="border border-gray-300 rounded-lg p-3 bg-white text-black focus:ring-2 focus:ring-black outline-none w-full"
  />
);

const Checkout = () => {
  const [step, setStep] = useState('shipping'); 
  const [selectedShipping, setSelectedShipping] = useState(null);
  
  const PRODUCT_PRICE = 65.00;
  const SHIPPING_COST = selectedShipping ? parseFloat(selectedShipping.price) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUNA ESQUERDA */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* BARRA DE PROGRESSO */}
          <div className="flex justify-between items-center text-xs border-b border-gray-200 pb-4 uppercase font-bold">
            <span className="text-gray-400">✓ Carrinho</span>
            <span className={step === 'shipping' ? "text-black underline underline-offset-8" : "text-gray-400"}>Entrega</span>
            <span className={step === 'payment' ? "text-black underline underline-offset-8" : "text-gray-400"}>Pagamento</span>
          </div>

          {step === 'shipping' && (
            <div className="space-y-8">
              <section className="space-y-4 bg-white p-6 rounded-xl shadow">
                <h2 className="text-lg font-semibold uppercase">Dados de Contato</h2>
                <InputField placeholder="Seu melhor e-mail" />
              </section>

              <section className="space-y-4 bg-white p-6 rounded-xl shadow">
                <h2 className="text-lg font-semibold uppercase">Entrega</h2>
                <ShippingSection 
                  originCep="60713300" 
                  onShippingSelect={(opt) => setSelectedShipping(opt)} 
                />
              </section>

              <section className="space-y-4 bg-white p-6 rounded-xl shadow">
                <h2 className="text-lg font-semibold uppercase">Dados para Recebimento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField placeholder="Nome" />
                  <InputField placeholder="Sobrenome" />
                </div>
                <InputField placeholder="CPF ou CNPJ" />
              </section>

              <button 
                onClick={() => setStep('payment')}
                className="w-full bg-black hover:opacity-90 text-white font-bold py-5 rounded-xl transition-all uppercase tracking-widest"
              >
                Ir para o Pagamento
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-8">
              <h2 className="text-xl font-bold uppercase border-l-4 border-black pl-4">
                Escolha o Pagamento
              </h2>
              
              <div className="grid gap-4">
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-5 h-5 accent-black" />
                  <span className="ml-4 font-semibold">Pix (5% de desconto)</span>
                </label>
                
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-5 h-5 accent-black" />
                  <span className="ml-4 font-semibold">Cartão de Crédito</span>
                </label>
              </div>

              <div className="flex gap-4">
                 <button 
                  onClick={() => setStep('shipping')}
                  className="w-1/3 bg-gray-200 hover:bg-gray-300 text-black py-4 rounded-xl uppercase text-sm"
                >
                  Voltar
                </button>
                <button className="w-2/3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl uppercase">
                  Finalizar Compra
                </button>
              </div>
            </div>
          )}
        </div>

        {/* COLUNA DIREITA (RESUMO) */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-8 shadow text-black">
            <h3 className="text-md font-bold mb-6 border-b border-gray-200 pb-2">
              Resumo
            </h3>

            <div className="flex gap-4 mb-6 items-center border-b border-gray-200 pb-6">
              <div className="w-16 h-16 bg-gray-100 rounded border border-gray-200"></div>
              <div className="text-sm">
                <p className="font-semibold leading-tight">Camisa Straykids - Dominate</p>
                <p className="text-black font-bold text-lg">R$ 65,00</p>
              </div>
            </div>

            <div className="space-y-3 text-sm pt-2">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>R$ {PRODUCT_PRICE.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Frete</span>
                <span className="font-bold text-black">
                  {SHIPPING_COST > 0 ? `R$ ${SHIPPING_COST.toFixed(2)}` : '--'}
                </span>
              </div>

              <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-200 mt-2">
                <span>Total</span>
                <span>R$ {(PRODUCT_PRICE + SHIPPING_COST).toFixed(2)}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;